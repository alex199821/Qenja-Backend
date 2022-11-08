require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const session = require("cookie-session");
const app = express();
// Module to use helmet js with additonal setting of allowing images to be fetched from cloudinary
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "img-src": ["'self'", "data:", "https:"],
    },
  })
);

//Module to allow crosssite delivery of cookies
app.use(
  session({
    secret: process.env.SESSION_SECRET || "Super Secret (change it)",
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: "none", // must be 'none' to enable cross-site delivery
      secure: true, // must be true if sameSite='none'
    },
  })
);

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
