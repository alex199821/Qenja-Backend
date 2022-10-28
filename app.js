require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());
const connectDB = require("./db/connect");
connectDB();
const cors = require("cors");
require("express-async-errors");

const productsRouter = require("./controllers/productsController");
const landingRouter = require("./controllers/landingController");
const aboutRouter = require("./controllers/aboutController");
const contactsRouter = require("./controllers/contactsController");
const shopRouter = require("./controllers/shopController");
const orderRouter = require("./controllers/orderController");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/landing", landingRouter);
app.use("/api/about", aboutRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/shop", shopRouter);
app.use("/api/orders", orderRouter);

module.exports = app;
