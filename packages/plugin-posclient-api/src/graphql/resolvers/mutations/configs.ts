import * as dotenv from 'dotenv';

import { Configs } from '../../../models/Configs';
import { debugError, debugInit } from '../../../debugger';
import { initBroker } from '../../messageBroker';
import { IOrderItemDocument } from '../../../models/definitions/orderItems';
import { OrderItems } from '../../../models/OrderItems';
import { Orders } from '../../../models/Orders';
import { PutResponses } from '../../../models/PutResponses';
import { sendRequest } from '../../utils/commonUtils';

import {
  importUsers,
  importProducts,
  validateConfig,
  extractConfig,
  importCustomers,
  preImportProducts,
  preImportCustomers
} from '../../utils/syncUtils';
import { ORDER_STATUSES } from '../../../models/definitions/constants';

dotenv.config();

const configMutations = {
  async posConfigsFetch(_root, { token }, models) {
    const { REACT_APP_MAIN_API_DOMAIN } = process.env;

    const config = await models.Configs.createConfig(token);

    const response = await sendRequest({
      url: `${REACT_APP_MAIN_API_DOMAIN}/pos-init`,
      method: 'get',
      headers: { 'POS-TOKEN': token }
    });

    if (response) {
      const {
        pos = {},
        adminUsers = [],
        cashiers = [],
        productGroups = [],
        customers = [],
        qpayConfig
      } = response;

      validateConfig();

      await models.Configs.updateConfig(config._id, {
        ...extractConfig(pos),
        syncInfo: pos.syncInfo,
        qpayConfig
      });

      await importUsers(cashiers);
      await importUsers(adminUsers);
      await importProducts(productGroups);
      await models.Customers.insertMany(customers);
    }

    initBroker()
      .then(() => {
        debugInit('Message broker has started.');
      })
      .catch(e => {
        debugError(`Error occurred when starting message broker: ${e.message}`);
      });

    return config;
  },

  async syncConfig(_root, { type }, models) {
    const { REACT_APP_MAIN_API_DOMAIN } = process.env;

    const config = await models.Configs.findOne({}).lean();

    const response = await sendRequest({
      url: `${REACT_APP_MAIN_API_DOMAIN}/pos-sync-config`,
      method: 'get',
      headers: { 'POS-TOKEN': config.token || '' },
      body: { syncId: config.syncInfo.id, type }
    });

    if (!response) {
      return;
    }

    switch (type) {
      case 'config':
        const {
          pos = {},
          adminUsers = [],
          cashiers = [],
          qpayConfig
        } = response;
        await models.Configs.updateConfig(config._id, {
          ...extractConfig(pos),
          syncInfo: pos.syncInfo,
          qpayConfig
        });

        await importUsers(cashiers);
        await importUsers(adminUsers);

        break;
      case 'products':
        const { productGroups = [] } = response;
        await preImportProducts(productGroups);
        await importProducts(productGroups);
        break;
      case 'customers':
        const { customers = [] } = response;
        await preImportCustomers(customers);
        await importCustomers(customers);
        break;
    }

    await models.Configs.updateOne(
      { _id: config._id },
      { $set: { 'syncInfo.date': new Date() } }
    );

    return 'success';
  },

  async syncOrders(_root, _param, models) {
    const { REACT_APP_MAIN_API_DOMAIN } = process.env;

    const orderFilter = {
      synced: false,
      status: { $in: ORDER_STATUSES.FULL },
      paidDate: { $exists: true, $ne: null }
    };
    let sumCount = await models.Orders.find({ ...orderFilter }).count();
    const orders = await models.Orders.find({ ...orderFilter })
      .sort({ paidDate: 1 })
      .limit(100)
      .lean();

    let kind = 'order';
    let putResponses = [];

    if (orders.length) {
      const orderIds = orders.map(o => o._id);
      const orderItems: IOrderItemDocument[] = await OrderItems.find({
        orderId: { $in: orderIds }
      }).lean();

      for (const order of orders) {
        order.items = (orderItems || []).filter(
          item => item.orderId === order._id
        );
      }

      putResponses = await models.PutResponses.find({
        contentId: { $in: orderIds },
        synced: false
      }).lean();
    } else {
      kind = 'putResponse';
      sumCount = await models.PutResponses.find({ synced: false }).count();
      putResponses = await models.PutResponses.find({ synced: false })
        .sort({ paidDate: 1 })
        .limit(100)
        .lean();
    }

    const config = await models.Configs.getConfig({});

    try {
      const response = await sendRequest({
        url: `${REACT_APP_MAIN_API_DOMAIN}/pos-sync-orders`,
        method: 'post',
        headers: { 'POS-TOKEN': config.token || '' },
        body: { syncId: config.syncInfo.id, orders, putResponses }
      });

      const { error, resOrderIds, putResponseIds } = response;

      if (error) {
        throw new Error(error);
      }

      await models.Orders.updateMany(
        { _id: { $in: resOrderIds } },
        { $set: { synced: true } }
      );
      await models.PutResponses.updateMany(
        { _id: { $in: putResponseIds } },
        { $set: { synced: true } }
      );
    } catch (e) {
      throw new Error(e.message);
    }

    return {
      kind,
      sumCount,
      syncedCount: orders.length
    };
  },

  async deleteOrders(_root, _param, models) {
    const orderFilter = {
      synced: false,
      status: ORDER_STATUSES.NEW
    };

    const count = await models.Orders.find({ ...orderFilter }).count();

    await models.Orders.deleteMany({ ...orderFilter });

    return {
      deletedCount: count
    };
  }
};

export default configMutations;