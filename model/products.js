const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  company: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Product", ProductSchema);