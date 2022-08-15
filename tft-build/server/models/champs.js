const mongoose = require('mongoose')

const champSchema = mongoose.Schema({
  id: {
      type: String
  },
  name: {
      type: String
  },
  cost: {
      type: Number
  },
  traits: {
      type: Array
  }
});

module.exports = mongoose.model('champ', champSchema);

// module.exports = Champ;