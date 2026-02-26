const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

app.use(helmet());
app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200
});

app.use(limiter);