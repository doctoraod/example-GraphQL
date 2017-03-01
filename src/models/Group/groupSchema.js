import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql'
import userData from '../../data/user'
import UserSchema from '../User/userSchema'

const GroupSchema = new GraphQLObjectType({
  name: 'GroupSchema',
  description: 'GroupSchema Detail',
  fields: () => ({
    users: {
      type: new GraphQLList(UserSchema),
      resolve: (source) => userData.filter(user => user.groupId === source.id),
    },
    id: {
      type: GraphQLInt,
      resolve: (source) => source.id,
    },
    role: {
      type: GraphQLString,
      resolve: (source) => source.role,
    },
  })
})

export { GroupSchema as default }
