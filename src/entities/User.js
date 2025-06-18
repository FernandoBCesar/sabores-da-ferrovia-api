const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    userId: { primary: true, type: "int", generated: true },
    name: { type: "varchar" },
    email: { type: "varchar", unique: true },
    password: { type: "varchar" },
    createdAt: { type: "datetime", createDate: true },
  },
  relations: {
    restaurant: {
      target: "Restaurant",
      type: "one-to-many",
      inverseSide: "createdBy",
    },
    review: {
      target: "Review",
      type: "one-to-many",
      inverseSide: "createdBy",
    },
  }
});