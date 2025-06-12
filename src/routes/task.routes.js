const express = require("express");
const router = express.Router();

const TaskController = require('../controllers/TaskController');

// Rota para criar uma nova tarefa
router.post('/tasks', TaskController.create);

// Rota para listar todas as tarefas
router.get('/tasks', TaskController.findAll);

// Rota para atualizar uma tarefa
router.put('/tasks/:id', TaskController.update);

// Rota para deletar uma tarefa
router.delete('/tasks/:id', TaskController.delete);

module.exports = router;
