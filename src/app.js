require("reflect-metadata");
const express = require("express");

const app = express();

const taskRoutes = require('./routes/task.routes');

app.use(express.json());

module.exports = app;