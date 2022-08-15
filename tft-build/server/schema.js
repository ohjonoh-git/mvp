const { gql } =  require('apollo-server-express');

const typeDefs = gql`

  type Query {
    champs: [Champ]
  }
  type Champ {
    id: ID!
    name: String!
    cost: Int!
    traits: [String]!
  }

  type Trait {
    key: String!
    name: String!
    description: String!
    type: String!
  }
  type Mutation {
    createChamp(name: String!): Champ!
  }
`

module.exports= typeDefs;

  // type Query {
  //   champsList: [Champs]
  //   Traits: [Traits]
  // }