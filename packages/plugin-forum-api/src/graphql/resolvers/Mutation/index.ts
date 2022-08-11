import { IContext } from '../..';
import { IObjectTypeResolver } from '@graphql-tools/utils';
import categoryMutations from './categoryMutations';
import postMutations from './postMutations';
import commentMutations from './commentMutations';

const Mutation: IObjectTypeResolver<any, IContext> = {
  ...categoryMutations,
  ...postMutations,
  ...commentMutations
};

export default Mutation;