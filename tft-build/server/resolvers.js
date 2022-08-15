const {Champ} = require('./models/champs')

const resolvers = {
  Query: {
    champs: () => Champ.find({})
    // async champs() {
    //   return await Champs.find({})
    // }
  }
}

module.exports = resolvers;