const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Favorites",
    tableName: "favorites",
    columns: {
        favoriteId: { type: "integer", primary: true, generated: true },
        createdAt: { type: "datetime", createDate: true },
    },
    relations: {
        createdBy: {
            target: "User",
            type: "many-to-one",
            joinColumn: true,
        },
        favorite: {
            target: "Restaurant",
            type: "many-to-one",
            joinColumn: true,
            onDelete: "SET NULL",
        },
    }
});

