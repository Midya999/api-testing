const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  patchProduct,
  deleteProduct
} = require("../controllers/products");

/* Root */
router.route("/")
  .get(getAllProducts)
  .post(createProduct);

/* With ID */
router.route("/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .patch(patchProduct)
  .delete(deleteProduct);

module.exports = router;