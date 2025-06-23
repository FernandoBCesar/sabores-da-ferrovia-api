const RestaurantService = require("../services/restaurant.service");
const { AppDataSource } = require("../database/data-source");
const restaurantRepo = AppDataSource.getRepository("Restaurant");
const service = new RestaurantService(restaurantRepo);

module.exports = {
  create: async (request, response) => {
    try {
      const { name, description, location, cuisineType } = request.body;

      // Verifica se o nome do restaurante é fornecido
      if (!name) {
        return response.status(400).json({ message: "Restaurant name is required." });
      }

      // Cria um novo restaurante
      const restaurant = await service.create({
        name,
        description,
        location,
        cuisineType,
        createdBy: { id: request.user.id }, // Supondo que você tenha um usuário autenticado
      });

      response.status(201).json(restaurant);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },

  list: async (request, response) => {
    try {
      const restaurants = await service.list();

      response.json(restaurants);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },

  listByCuisine: async (request, response) => {
    try {
      const { cuisineType } = request.params;
      const restaurants = await service.listByCuisine(cuisineType);

      response.json(restaurants);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },
};
