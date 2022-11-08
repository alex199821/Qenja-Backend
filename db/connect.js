const config = require("../utils/config");
const logger = require("../utils/logger");

const mongoose = require("mongoose");

//Function to connect express server to mongo
logger.info("connecting to", config.MONGODB_URI);

const connectDB = () => {
  mongoose
    .connect(config.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
      logger.info("connected to MongoDB");
    })
    .catch((error) => {
      logger.error("error connection to MongoDB:", error.message);
    });
};

module.exports = connectDB;
