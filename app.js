require('dotenv-expand').expand(require('dotenv').config());

const express = require('express');
const cors = require('cors');
const { API_CONFIG } = require('./config/appConfig');
const db = require('./config/dbConn');


const app = express();
const PORT = API_CONFIG.API_RUNNING_PORT;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    message: API_CONFIG.API_NAME,
    status: 1
  });
});



db().then(() => {
  console.log("MongoDB is connected..");
  app.listen(PORT, () => {
    console.log(`Server is running on ${API_CONFIG.API_RUNNING_URL}`);
  });
}).catch(err => {
  console.log("MongoDB is not connected due to ", err);
})
