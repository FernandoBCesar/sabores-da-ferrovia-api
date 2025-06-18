const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Review",
  tableName: "reviews",
  columns: {
    reviewId: { primary: true, type: "int", generated: true },
    stars: { type: "integer" },
    createdAt: { type: "datetime", createDate: true }
  },
  relations: {
    createdBy: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
    },
    restaurant: {
      target: "Restaurant",
      type: "many-to-one",
      joinColumn: true,
    },
  }
});