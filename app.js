const express = require('express');
const connectDB = require('./db/connect');
require('dotenv').config();

const product_router = require('./routes/products');

const app = express();

app.use(express.json());
app.use('/api/v1/products', product_router);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();