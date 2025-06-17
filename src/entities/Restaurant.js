const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Restaurant",
    tableName: "restaurants",
    columns: {
        restaurantId: {  type: "integer",primary: true, generated: true }
    },
    relations: {
        favorite: {
            target: "Favorites",
            type: "many-to-one",
            joinColumn: true,
            onDelete: "SET NULL",
        },
    }
});