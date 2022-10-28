const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  shopMobileViewBoldText: {
    shopMobileViewBoldTextStart: String,
    shopMobileViewBoldTextUnderlined: String,
    shopMobileViewBoldTextEnd: String,
  },
  shopMobileViewImage: String,
  shopMainCoverImage: String,
  shopMobileViewNormalText: String,
});

shopSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Shop", shopSchema);
