require('dotenv-expand').expand(require('dotenv').config());

const express = require('express');
const cors = require('cors');
const { API_CONFIG } = require('./config/appConfig');
const db = require('./config/dbConn');
const { notFoundErrorHandler } = require('./middlewares/error/400Error');
const { logErrors, errorHandler } = require('./middlewares/error/500Error');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');


const app = express();
const PORT = API_CONFIG.API_RUNNING_PORT;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.get('/', (req, res) => {
  try {
  return res.status(200).json({
    message: API_CONFIG.API_NAME,
    status: 1
  });
  } catch(err) {
    next(err);
  }
});

app.use(notFoundErrorHandler);
app.use(logErrors);
app.use(errorHandler);


db().then(() => {
  console.log("MongoDB is connected..");
  app.listen(PORT, () => {
    console.log(`Server is running on ${API_CONFIG.API_RUNNING_URL}`);
  });
}).catch(err => {
  console.log("MongoDB is not connected due to ", err);
});
