const { DataSource } = require("typeorm");
const User = require("../entities/User");
const restaurant = require("../entities/restaurant");
const Review = require("../entities/Review");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/database.sqlite",
  synchronize: true,
  entities: [User, restaurant, Review],
});

module.exports = { AppDataSource };