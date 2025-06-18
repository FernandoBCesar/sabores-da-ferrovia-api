const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Review",
  tableName: "reviews",
  columns: {
    reviewId: {type: "int", primary: true, generated: true },
    stars: {type: "int", primary: true},
    createdAt: {type: "datetime",createDate: true} 
  },
   relations: {
      user: {
        target: "User",
        type: "many-to-one",
        joinColumn: true,
        eager: true
      },
      restaurant: {
        target: "Restaurant",
        type: "many-to-one",
        joinColumn: true,
        eager: true
      },
  }
});