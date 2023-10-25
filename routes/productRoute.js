const router = require("express").Router()
const ProductsController  = require("../controllers/productController")

router.route("/products")
        .get(ProductsController.getAllProducts)
        .post(ProductsController.addProduct)

router.route("/products/:id")
        .get(ProductsController.getProductById)
        .delete(ProductsController.deleteProduct)

module.exports = router