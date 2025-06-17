const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    userId: { type: "int", primary: true, generated: true },
    name: { type: "varchar" },
    email: { type: "varchar", unique: true },
    password: { type: "varchar" },
    createdAt: { type: "datetime", createDate: true },
  },
  relations: {
    favorite: {
      target: "Favorites",
      type: "one-to-many",
      inverseSide: "createdBy",
    },
  }
});