const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
const userRouter = require('./routes/users');
const locationsRouter = require('./routes/locations');
dotenv.config();
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('mongodb connected');
  })
  .catch((err) => console.log(err));

app.use('/dist', express.static(path.join(__dirname, '../dist')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/locations', locationsRouter);
app.use('/users', userRouter);

app.listen(
  process.env.PORT,
  console.log(`listening on PORT:${process.env.PORT}`),
);