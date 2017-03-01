import { GraphQLObjectType } from 'graphql'
import user from './models/User/userQuery'
import group from './models/Group/groupQuery'

const rootFields = Object.assign({},
  user,
  group,
)

export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => rootFields,
})
