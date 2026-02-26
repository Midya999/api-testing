const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  patchProduct,
  deleteProduct,
  deleteAllProducts,
  deleteManyProducts,
} = require("../controllers/products");

// BULK DELETE (DELETE ALL)
router.delete("/bulk", deleteAllProducts);

// DELETE MANY BY IDS
router.delete("/many", deleteManyProducts);

// ROOT ROUTE
router.route("/")
  .get(getAllProducts)
  .post(createProduct);

// SINGLE PRODUCT ROUTES
router.route("/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .patch(patchProduct)
  .delete(deleteProduct);

module.exports = router;