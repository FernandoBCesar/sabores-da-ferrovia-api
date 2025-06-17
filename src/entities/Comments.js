const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Comments",
  tableName: "comments",
  columns: {
    commentId: { type: "int", primary: true, generated: true },
    comment: { type: "varchar" },
    createdAt: { type: "datetime", createDate: true },
  },
  relations: {
    createdBy: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      eager: true,
    },
  },
});
