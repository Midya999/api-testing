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
router.delete("/bulk", async (req, res) => {
  try {
    const result = await Product.deleteMany({});
    res.status(200).json({
      success: true,
      deleted: result.deletedCount
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

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