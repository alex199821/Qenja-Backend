const router = require("express").Router();

const Order = require("../models/orderModel");

//Controller to fetch all active orders
router.get("/", async (request, response) => {
  let order = await Order.find({});
  try {
    if (order) {
      response.json(order);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    console.log(error);
    response.status(500).end();
  }
});

//Controller to add order to the database of orders
router.post("/", (request, response) => {
  const body = request.body;

  if (body.cart === undefined || body.orderInformation === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const order = new Order({
    cart: body.cart,
    orderInformation: body.orderInformation,
    total: body.total,
  });
  order.save().then((savedOrder) => {
    response.json(savedOrder);
  });
});

module.exports = router;
