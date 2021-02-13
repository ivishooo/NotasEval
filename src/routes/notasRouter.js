const express = require('express');
const notasRouter = express.Router();
const notesController = require('../controllers/notesController');

notasRouter.get('/', notesController.index);
notasRouter.put('/', notesController.create);
notasRouter.get('/edit/:id', notasController.edit);
notasRouter.put('/edit/:id', notasController.upload);
notasRouter.delete('/:id', notasController.delete);

module.exports = notesRouter;