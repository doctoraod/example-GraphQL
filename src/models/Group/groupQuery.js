import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql'
import groupData from '../../data/group'
import GroupSchema from './groupSchema'

export default {
  groups: {
    type: new GraphQLList(GroupSchema),
    args: {
      id: {
        type: GraphQLInt,
      },
    },
    resolve: () => groupData,
  },
}
