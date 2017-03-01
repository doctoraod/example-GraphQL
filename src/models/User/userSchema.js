import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql'
import groupData from '../../data/group'
import GroupSchema from '../Group/groupSchema'

const UserSchema = new GraphQLObjectType({
  name: 'UserSchema',
  description: 'UserSchema Detail',
  fields: () => ({
    groupInfo: {
      type: GroupSchema,
      resolve: (source) => groupData.find(group => group.id === source.groupId),
    },
    id: {
      type: GraphQLInt,
      resolve: (source) => source.id,
    },
    name: {
      type: GraphQLString,
      resolve: (source) => source.name,
    },
  })
})

export { UserSchema as default }
