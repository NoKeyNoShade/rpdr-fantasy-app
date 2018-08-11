import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLFieldConfigMap,
} from 'graphql';
import { userType } from '../user';
import pg from '../../postgres';

interface LeagueParam {
  id: string;
}

export default new GraphQLObjectType({
  name: 'League',
  description: 'A representation of a league.',
  fields: (): any => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'ID of the league.',
      },
      label: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Label for the league.',
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
        description: 'The timestamp which this league was created at.',
      },
      members: {
        type: new GraphQLNonNull(new GraphQLList(userType)),
        description: 'A list of members  who are a part of the league.',
        resolve: (league: LeagueParam): Promise<String | User[]> => {
          return pg.users.getUsersByLeagueId(league.id);
        },
      },
    };
  },
});

