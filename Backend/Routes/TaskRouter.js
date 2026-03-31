const express = require('express');
const { createTask, fetchAllTask, updateTaskById, deleteTaskById } = require('../controllers/TaskController');
const router = express.Router()

// to get all the tasks
router.get('/',fetchAllTask);

// To create a task
router.post('/',createTask);

// To update a task
router.put('/:id',updateTaskById);

// To delete a task
router.delete('/:id',deleteTaskById);

module.exports = router;