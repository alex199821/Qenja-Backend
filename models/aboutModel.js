const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  mainAboutSectionHeader: String,
  mainAboutSectionImage: String,
  mainAboutSectionDescription: { textUnderlined: String, standardText: String },
  minorAboutSectionImage: String,
  minorAboutSectionTextOne: { highlighted: String, minorAboutSectionTextOneStandardText: String },
  minorAboutSectionTextTwo: {
    standardTextStart: String,
    highlightedMinorAboutSectionTextTwo: String,
    standardTextEnd: String,
  },
});

aboutSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("About", aboutSchema);
