const express = require('express');
const notasRouter = express.Router();
const notasController = require('../controllers/notasController');

notasRouter.get('/', notasController.index);
notasRouter.post('/create', notasController.create);
notasRouter.get('/edit/:id', notasController.edit);
notasRouter.put('/edit/:id', notasController.upload);
notasRouter.delete('/delete/:id', notasController.delete);

module.exports = notasRouter;