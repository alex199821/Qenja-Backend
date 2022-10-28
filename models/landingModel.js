const mongoose = require("mongoose");

const landingSchema = new mongoose.Schema({
  landingMainHeaderText: { standartText: String, textInCircle: String },
  landingMainHeaderImage: String,
  imageCollection: [String],
  landingUpperCoverText: {
    standartText: String,
    textUnderlined: String,
    standartTextContiniuation: String,
  },
  landingUpperCoverImage: String,
  shopPreviewShortDescription: String,
  shopPreviewLongDescription: String,
  landingLowerCoverImage: String,
});

landingSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Landing", landingSchema);
