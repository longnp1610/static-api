/**
 * @swagger
 * /api/products:
 *    get:
 *      tags:
 *        - Product
 *      description: Get all products
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/products:
 *    post:
 *      tags:
 *        - Product
 *      description: Create a new product
 *      requestBody:
 *        content:
 *          application/xml
 *          application/json
 *      parameters:
 *        - name: name
 *          description: Product Name
 *          required: false
 *          in: formData
 *          type: string
 *        - name: price
 *          description: Product Price
 *          in: formData
 *          type: string
 *          required: false
 *      responses:
 *        201:
 *          description: Success
 */

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *    tags:
 *      - Product
 *    description: Get a product by ID
 *    parameters:
 *      - name: id
 *        description: Product ID
 *        required: true
 *        type: number
 *        in: path
 *    responses:
 *      202:
 *        description: Success
 *      500:
 *        description: Unsuccess
 */

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    tags:
 *      - Product
 *    description: Update a product by ID
 *    parameters:
 *      - name: id
 *        description: Product ID
 *        required: true
 *        type: number
 *        in: path
 *      - name: name
 *        description: Product Name
 *        required: false
 *        type: string
 *        in: formData
 *      - name: price
 *        description: Product Price
 *        type: string
 *        required: false
 *        in: formData
 *    responses:
 *      203:
 *        description: Success
 *      500:
 *        description: Unsuccess
 */

module.exports = (app) => {
  const ProductsController = require("../controllers/ProductsController");
  app
    .route("/api/products")
    .get(ProductsController.list_all_products)
    .post(ProductsController.create_new_product);

  app
    .route("/api/products/:id")
    .get(ProductsController.get_product_by_id)
    .put(ProductsController.update_product);
};
