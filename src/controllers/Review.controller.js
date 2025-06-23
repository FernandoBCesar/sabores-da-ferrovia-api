const ReviewService = require("../services/review.service");
const { AppDataSource } = require("../database/data-source");
const reviewRepo = AppDataSource.getRepository("Review");
const service = new ReviewService(reviewRepo);

module.exports = {
  create: async (request, response) => {
    try {
      const { rating, comment, episodeId } = request.body;

      // Verifica se a avaliação é válida
      if (!rating || rating < 1 || rating > 5) {
        return response.status(400).json({ message: "Rating must be between 1 and 5." });
      }

      // Cria uma nova avaliação
      const review = await service.create({
        rating,
        comment,
        episode: { id: parseInt(episodeId) },
        createdBy: { id: request.user.id }, // Supondo que você tenha um usuário autenticado
      });

      response.status(201).json(review);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },

  listByEpisode: async (request, response) => {
    try {
      const reviews = await service.listByEpisode(request.params.episodeId);

      response.json(reviews);
    } catch (err) {
      response.status(500).json({ message: err.message });
    }
  },
};
