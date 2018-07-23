import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'League',
  description: 'A representation of a league.',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'ID of the league.',
    },
    label: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Label for the leauge.',
    },
    active: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Whether or not this league is active.',
    },
    week: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The week which the league is currently in',
    },
    season_id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The ID of the season which this league is for.',
    },
    created_at: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The timestamp which this leage was created at.',
    },
  },
});
