const { AppDataSource } = require("../config/data-source");

const taskRepository = AppDataSource.getRepository("Task");

module.exports = {
  async listTasks(req, res) {
        const tasks = await taskRepository.find();
        return res.status(200).json(tasks);
  },

  
}