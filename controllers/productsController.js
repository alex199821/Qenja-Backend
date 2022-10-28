const router = require("express").Router();

const Product = require("../models/productModel");

router.get("/", async (request, response) => {
  let products = await Product.find({});
  try {
    if (products) {
      response.json(products);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    console.log(error);
    response.status(500).end();
  }
});

router.get("singleProduct/:id", async (request, response) => {
  try {
    let product = await Product.findById(request.params.id);
    if (product) {
      response.json(product);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    console.log(error);
    response.status(500).end();
  }
});

router.post("/", (request, response) => {
  const body = request.body;

  if (body.name === undefined || body.type === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const product = new Product({
    name: body.name,
    type: body.type,
    description: body.description,
    image: body.image,
    additionalImages: body.additionalImages,
    price: body.price,
    sizeList: body.sizeList,
    colorList: body.colorList,
    matter: body.matter,
    availability: body.availability,
  });

  product.save().then((savedProduct) => {
    response.json(savedProduct);
  });
});

module.exports = router;
