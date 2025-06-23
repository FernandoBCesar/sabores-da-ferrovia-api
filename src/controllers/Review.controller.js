const ReviewService = require("../services/review.service");
const { AppDataSource } = require("../database/data-source");
const reviewRepo = AppDataSource.getRepository("Review");
const service = new ReviewService(reviewRepo);

module.exports = {
  // Criar uma nova avaliação
  create: async (request, response) => {
    try {
      const { restaurantid, stars } = request.body;
      const userid = request.user.id; // Assume que o usuário está autenticado

      // Validação básica
      if (!restaurantid || !stars) {
        return response.status(400).json({ message: "Restaurant ID and stars are required." });
      }

      if (stars < 1 || stars > 5) {
        return response.status(400).json({ message: "Stars must be between 1 and 5." });
      }

      // Cria a avaliação
      const review = await service.create({
        restaurantid,
        userid,
        stars,
        createdAt: new Date(),
      });

      response.status(201).json({
        reviewid: review.reviewid,
        restaurantid: review.restaurantid,
        userid: review.userid,
        stars: review.stars,
        createdAt: review.createdAt,
      });
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },

  // Listar todas as avaliações de um restaurante
  listByRestaurant: async (request, response) => {
    try {
      const reviews = await service.listByRestaurant(request.params.restaurantId);
      response.json(reviews);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },

  // Obter avaliação por ID
  getById: async (request, response) => {
    try {
      const review = await service.getById(request.params.id);

      if (!review) {
        return response.status(404).json({ message: "Review not found." });
      }

      response.json(review);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },
};
