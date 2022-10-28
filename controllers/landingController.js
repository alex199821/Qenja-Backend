const router = require("express").Router();

const Landing = require("../models/landingModel");

router.get("/", async (request, response) => {
  let landing = await Landing.find({});
  try {
    if (landing) {
      response.json(landing);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    console.log(error);
    response.status(500).end();
  }
});

// router.post("/", (request, response) => {
//   const body = request.body;
//   console.log(body)
//   if (body.header === undefined || body.description === undefined) {
//     return response.status(400).json({ error: "content missing" });
//   }

//   const landing = new Landing({
//     header: body.header,
//     description: body.description,
//   });

//   console.log(landing);
//   landing.save().then((savedLanding) => {
//     response.json(savedLanding);
//   });
// });

module.exports = router;
