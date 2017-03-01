import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import graphHTTP from 'express-graphql'
import Schema from './rootSchema'

const HTTP_PORT = 4000
// Start
const app = express()

// GraphQL
app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json())
app.use(cors())
app.use('/graphql', graphHTTP(req => ({
  schema: Schema,
  rootValue: req,
  pretty: true,
  graphiql: true,
})))

app.listen(HTTP_PORT, (err) => {
  if (err) {
    throw err
  }
  console.log(`> Ready on http://localhost:${HTTP_PORT}/graphql`) // eslint-disable-line
})
