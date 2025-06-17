const { DataSource } = require("typeorm");
const User = require("../entities/User");
const restaurant = require("../entities/restaurant");
const favorites = require("../entities/favorites");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/database.sqlite",
  synchronize: true,
  entities: [User, restaurant, favorites],
});

module.exports = { AppDataSource };