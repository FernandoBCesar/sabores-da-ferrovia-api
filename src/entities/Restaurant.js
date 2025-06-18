const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Restaurant",
    tableName: "restaurants",
    columns: {
        restaurantId: { primary: true, type: "int", generated: true },
        name: { type: "integer" },
        createdAt: { type: "datetime", createDate: true },
    },
    relations: {
    createdBy: {
        target: "User",
        type: "many-to-one",
        joinColumn: true,
    },
    review: {
      target: "Review",
      type: "one-to-many",
      inverseSide: "restaurant",
    },
    }
});