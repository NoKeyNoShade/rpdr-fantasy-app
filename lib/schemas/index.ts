import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import queryFields from './query';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: queryFields,
  }),
});
