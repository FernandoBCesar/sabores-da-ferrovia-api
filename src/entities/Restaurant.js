const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Restaurant",
    tableName: "restaurants",
    columns: {
        restaurantId: { type: "integer", primary: true, generated: true },
        name: { type: "integer", primary: true, },
        createdAt: { type: "datetime", createDate: true },
    },
    relations: {
        createdBy: {
            target: "User",
            type: "many-to-one",
            joinColumn: true,
        },
        favorite: {
            target: "Favorites",
            type: "many-to-one",
            inverseSide: "createdBy",
        },

    }
});