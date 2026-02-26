const Product = require("../model/products");

/* ===============================
   GET ALL PRODUCTS
================================= */
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ count: products.length, products });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

/* ===============================
   GET SINGLE PRODUCT
================================= */
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Invalid ID" });
  }
};

/* ===============================
   CREATE PRODUCT
================================= */
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* ===============================
   UPDATE PRODUCT (PUT)
================================= */
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
};

/* ===============================
   PARTIAL UPDATE (PATCH)
================================= */
const patchProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Patch failed" });
  }
};

/* ===============================
   DELETE PRODUCT
================================= */
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Delete failed" });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  patchProduct,
  deleteProduct
};