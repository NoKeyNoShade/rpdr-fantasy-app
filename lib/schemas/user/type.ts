import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';

import { leagueType } from '../leagues';
import pg from '../../postgres';

export default new GraphQLObjectType({
  name: 'User',
  description: 'A representation of a user.',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'ID of the league.',
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the email of the user.',
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'first name of the user',
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'last name of the user',
    },
    leagues: {
      type: new GraphQLNonNull(new GraphQLList(leagueType)),
      description: 'the leagues which the user are part of',
      resolve: (user) => {
        return pg.leagues.getLeaguesByUserId(user.id).then(leagues => leagues);
      },
    },
  },
});
