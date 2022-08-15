const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const Data = require('./models/champs');

const PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();


const dbRoute =
  'mongodb://localhost:27017/tft';

mongoose.connect(dbRoute, { useNewUrlParser: true });



mongoose.connection.once('open', () => console.log('connected to the database'));
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router.get('/getUnits', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});




// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));