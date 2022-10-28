const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
  contactPhone: String,
  mail: String,
  facebookPath: String,
  instagramPath: String,
  twitterPath: String,
  telegramPath: String,
});

contactsSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Contacts", contactsSchema);
