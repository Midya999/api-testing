const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();

const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const productRouter = require("./routes/products");

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
});

app.use(limiter);

// JSON
app.use(express.json());

// Routes
app.use("/api/v1/products", productRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () =>
      console.log(`Server running on port ${port}`)
    );
  } catch (error) {
    console.error(error);
  }
};

start();