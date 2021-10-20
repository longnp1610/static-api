const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const bodyParser = require("body-parser");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Store API",
      version: "1.0.0",
      description:
        "This is a Static API about product.<br /> Made by <b>18521043 - NguyenPhiLong</b>",
    },
  },
  apis: ["./routes/ProductsRoute.js"],
};

const options = {
  customCss:
    ".swagger-ui .topbar { display: none } .scheme-container {display:none}",
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs);

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs, options));

//Middleware for POST and PUT
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const ProductsRoute = require("./routes/ProductsRoute");
ProductsRoute(app);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3131, () => console.log("Server running"));
