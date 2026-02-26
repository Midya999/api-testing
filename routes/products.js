const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  patchProduct,
  deleteProduct,
  deleteManyProducts,
} = require("../controllers/products");

// BULK DELETE
router.delete("/bulk", deleteManyProducts);

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