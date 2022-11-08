require("dotenv").config();

const connectDB = require("./db/connect");

//Models for population of data
const Product = require("./models/productModel");
const Landing = require("./models/landingModel");
const About = require("./models/aboutModel");
const Contacts = require("./models/contactsModel");
const Shop = require("./models/shopModel");

//Data for population
const jsonProducts = require("./populateData/products.json");
const jsonLanding = require("./populateData/landing.json");
const jsonAbout = require("./populateData/about.json");
const jsonContacts = require("./populateData/contacts.json");
const jsonShop = require("./populateData/shop.json");

//This function allows you to upload web page data using json files - until admin panel is ready
const start = async () => {
  try {
    await connectDB();
    await Shop.deleteMany();
    await Shop.create(jsonShop);
    console.log("Data Populated Succesfully!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
