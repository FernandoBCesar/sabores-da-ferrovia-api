const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Review",
  tableName: "reviews",
  columns: {
    reviewId: { type: "integer", primary: true, generated: true },
    stars: { type: "integer" },
    createdAt: { type: "datetime", createDate: true }
  },
  relations: {
    user: {
      target: "User",
      type: "many-to-one",
      inverseSide: "createdBy",
    },
    restaurant: {
      target: "Restaurant",
      inverseSide: "createdBy",
    },
  }
});