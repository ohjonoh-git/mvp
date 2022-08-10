const { gql } = require('apollo-server');

const typeDefs = gql`
  "Entry point into the schema"
  "Query to get units champs list"
  type Query {
    champsList: [Champs!]!
  }
  "List of Champions/Units"
  type Champs {
    id: ID!,
    name: String!
    "URL for the image"
    img: String!
    traits: [Traits!]
  }
  "Specific traits for champs"
  type Traits {
    id: ID!,
    type: String!
  }
`

module.exports = typeDefs;