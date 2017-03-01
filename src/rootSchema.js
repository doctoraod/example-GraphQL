import { GraphQLSchema } from 'graphql'
import Query from './rootQuery'

const Schema = new GraphQLSchema({
  query: Query,
})

export default Schema
