const express = require("express");
const AuthController = require("../controllers/auth.controller");
const RestaurantController = require("../controllers/restaurant.controller");
const ReviewController = require("../controllers/Review.controller");

const routes = express.Router();

//autenticacao
routes.post("/auth/register", AuthController.register);
routes.post("/auth/login", AuthController.login);

module.exports = routes;
