var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const { ApolloServer } = require('apollo-server');
const typeDefs == require('./schema');

const port = 4000;
const server = new ApolloServer({
  typeDefs, mocks: true
});

server.listen().then(() => {
  console.log(`
    SERVER IS RUNNING!
    Listening on port ${port}
    Query at http://localhost:${port}
  `)
})

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world! This is root';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');



// const typeDefs = gql`
//   "Entry point into the schema"
//   "Query to get units champs list"
//   type Query {
//     champsList: [Champs!]!
//   }
//   "List of Champions/Units"
//   type Champs {
//     id: ID!,
//     name: String!
//     "URL for the image"
//     img: String!
//     traits: [Traits!]
//   }

//   type Traits {
//     id: ID!,
//     type: String!
//   }
// `

// Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     champ(id: Int!): Champs
//     champs(trait: String): [Champs]
//   },
//   "List of Champions/Units"
//   type Champs {
//     id: Int,
//     url: String,
//     traits: [Traits!]
//     cost: Int
//   },
//   "Specific traits for champs"
//   type Traits {
//     id: Int,
//     type: String
//   }
// `);