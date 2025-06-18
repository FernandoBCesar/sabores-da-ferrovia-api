const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Restaurant",
    tableName: "restaurants",
    columns: {
    restaurantId: {  type: "integer",primary: true, generated: true },
    image: {type:"varchar"},
},
    relations: {
        user: {
            target: "User",
            type: "many-to-one",
            joinColumn: true,
            eager: true
        },
        favorite: {
            target: "Favorites",
            type: "many-to-one",
            joinColumn: true,
            onDelete: "SET NULL",
        },
        
    }
});