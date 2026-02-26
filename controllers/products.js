const Product = require("../model/products");

// GET ALL
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};

// GET SINGLE
const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({ product });
};

// CREATE
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
};

// UPDATE (PUT)
const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({ product });
};

// PATCH
const patchProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({ product });
};

// DELETE SINGLE
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({ message: "Product deleted successfully" });
};

// DELETE ALL
const deleteAllProducts = async (req, res) => {
  try {
    const result = await Product.deleteMany({});
    res.status(200).json({
      message: "All products deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE MANY BY IDS
const deleteManyProducts = async (req, res) => {
  const { ids } = req.body;

  const result = await Product.deleteMany({
    _id: { $in: ids },
  });

  res.status(200).json({
    message: "Selected products deleted successfully",
    deletedCount: result.deletedCount,
  });
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  patchProduct,
  deleteProduct,
  deleteAllProducts,
  deleteManyProducts,
};