const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cart: [
    {
      amount: Number,
      color: String,
      image: String,
      name: String,
      price: String,
      size: String,
    },
  ],
  orderInformation: {
    address: String,
    comment: String,
    email: String,
    name: String,
    phoneNumber: Number,
    surname: String,
    terms: Boolean,
  },
  total: Number,
});

orderSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Order", orderSchema);
