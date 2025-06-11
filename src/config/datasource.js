const { DataSource } = require("typeorm");

const Task = require("../entities/Task");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/sabores-da-ferrovia-api.sqlite",
  synchronize: true,
  entities: [Task],
});

module.exports = { AppDataSource };
