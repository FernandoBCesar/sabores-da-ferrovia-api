const express = require("express");
const AuthController = require("../controllers/auth.controller");
const routes = express.Router();

routes.post("/auth/register", AuthController.register);
routes.post("/auth/login", AuthController.login);

module.exports = routes;
