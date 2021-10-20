var products = [
  {
    _id: 1,
    name: "X-2018 Christmas Pro Max",
    price: 999,
    category: "Bicycle",
  },
  {
    _id: 2,
    name: "X-2020 Summer",
    price: 128.2,
    category: "Bicycle",
  },
];

exports.list_all_products = (req, res) => {
  res.status(200);
  res.setHeader("Content-Type", "text/json");
  res.json(products);
};

exports.create_new_product = (req, res) => {
  let newParam = {
    _id: products.length + 1,
    name: req.body.name,
    price: parseFloat(req.body.price),
    category: "Bicycle",
  };
  products.push(newParam);
  res.status(201).send(newParam);
};

exports.get_product_by_id = (req, res) => {
  let newParam = products.find((el) => el._id === parseInt(req.params.id));
  newParam == undefined
    ? res.status(500).send("Cannot find element")
    : res.status(202).send(newParam);
};

exports.update_product = (req, res) => {
  let newParam = products.find((el) => el._id === parseInt(req.params.id));
  if (newParam == undefined) res.status(500).send("Have an error.");
  if (req.body.name != undefined) newParam.name = req.body.name;
  if (req.body.price != undefined) newParam.price = parseFloat(req.body.price);
  res.status(203).send(newParam);
};
