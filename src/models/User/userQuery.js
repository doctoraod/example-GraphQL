import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql'
import userData from '../../data/user'
import UserSchema from './userSchema'

export default {
  users: {
    type: new GraphQLList(UserSchema),
    args: {
      id: {
        type: GraphQLInt,
      },
    },
    resolve: () => userData,
  },
}
