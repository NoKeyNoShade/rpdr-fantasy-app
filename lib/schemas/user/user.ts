import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import userType from './type';
import pg from '../../postgres';

type GetUserByIDParams = {
  user_id: string,
};

export default {
  type: new GraphQLNonNull(userType),
  description: 'get a user based on a provided ID.',
  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'ID of the user to retrieve',
    },
  },
  resolve: (_: any, params: GetUserByIDParams) => {
    return pg.users.getUserById(params.user_id)
      .then((users: User[]): any => {
        if (users.length != 1) {
          return Promise.reject(`more than one user found with ID ${params.user_id}`);
        }

        return users[0];
      });
  },
};
