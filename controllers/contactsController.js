const router = require("express").Router();

const Contacts = require("../models/contactsModel");

router.get("/", async (request, response) => {
  let contacts = await Contacts.find({});
  try {
    if (contacts) {
      response.json(contacts);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    console.log(error);
    response.status(500).end();
  }
});

module.exports = router;
