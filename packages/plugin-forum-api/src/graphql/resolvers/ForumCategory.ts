import { IContext } from '..';
import { IObjectTypeResolver } from '@graphql-tools/utils';
import { ICategory } from '../../db/models/category';

const ForumCategory: IObjectTypeResolver<ICategory, IContext> = {
  async parent({ parentId }, _, { models: { Category } }) {
    return Category.findById(parentId).lean();
  },

  async children({ _id }, _, { models: { Category } }) {
    return Category.find({ parentId: _id }).lean();
  },

  async descendants({ _id }, _, { models: { Category } }) {
    return Category.getDescendantsOf([_id]);
  },

  async ancestors({ _id }, _, { models: { Category } }) {
    return Category.getAncestorsOf(_id);
  },
  async posts({ _id }, { last }, { models: { Post } }) {
    if (!last) return [];
    return Post.find({ categoryId: _id })
      .limit(last)
      .lean();
  }
};

export default ForumCategory;