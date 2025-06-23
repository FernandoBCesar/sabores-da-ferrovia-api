const RestaurantService = require("../services/restaurant.service");
const { AppDataSource } = require("../database/data-source");
const restaurantRepo = AppDataSource.getRepository("Restaurant");
const service = new RestaurantService(restaurantRepo);

module.exports = {
  // Criar um novo restaurante
  create: async (request, response) => {
    try {
      const { name, image } = request.body;
      const userId = request.user.id; // Assume que o usuário está autenticado

      // Validação básica
      if (!name) {
        return response.status(400).json({ message: "Restaurant name is required." });
      }

      // Cria o restaurante
      const restaurant = await service.create({
        userid: userId,
        name,
        image: image || null,
        createdAt: new Date(),
      });

      response.status(201).json({
        restaurantid: restaurant.restaurantid,
        userid: restaurant.userid,
        name: restaurant.name,
        image: restaurant.image,
        createdAt: restaurant.createdAt,
      });
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },

  // Listar todos os restaurantes
  listAll: async (request, response) => {
    try {
      const restaurants = await service.listAll();

      response.json(restaurants);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },

  // Obter restaurante por ID
  getById: async (request, response) => {
    try {
      const restaurant = await service.getById(request.params.id);

      if (!restaurant) {
        return response.status(404).json({ message: "Restaurant not found." });
      }

      response.json(restaurant);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },
};
