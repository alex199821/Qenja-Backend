const router = require("express").Router();

const Shop = require("../models/shopModel");

//Controller to fetch shop page data
router.get("/", async (request, response) => {
  let shop = await Shop.find({});
  try {
    if (shop) {
      response.json(shop);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    console.log(error);
    response.status(500).end();
  }
});

module.exports = router;
