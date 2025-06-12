const { AppDataSource } = require("../config/data-source");

const taskRepository = AppDataSource.getRepository("Task");

module.exports = {
  async listTasks(req, res) {
        const tasks = await taskRepository.find();
        return res.status(200).json(tasks);
  },

  async createTask(req, res) {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Título e descrição são obrigatórios" });
    }

    const newTask = taskRepository.create({ title, description });
    await taskRepository.save(newTask);

    return res.status(201).json(newTask);
  },
};