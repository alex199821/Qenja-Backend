const router = require("express").Router();

const About = require("../models/aboutModel");

router.get("/", async (request, response) => {
  console.log(request);
  let about = await About.find({});
  try {
    if (about) {
      response.json(about);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    console.log(error);
    response.status(500).end();
  }
});

module.exports = router;
