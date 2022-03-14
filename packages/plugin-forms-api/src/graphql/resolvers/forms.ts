import { Users } from "../../apiCollections";
import { Fields } from "../../models";
import { IFormDocument } from "../../models/definitions/forms";

export default {
  createdUser(form: IFormDocument) {
    return Users.findOne({ _id: form.createdUserId });
  },

  fields(form: IFormDocument) {
    return Fields.find({ contentType: 'form', contentTypeId: form._id }).sort({
      order: 1
    });
  }
};