const express = require("express");
const { sendEmail } = require("../controllers/portfolioController");

const routes = express.Router();

routes.post("/", sendEmail);

module.exports = routes;
