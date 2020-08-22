const express = require('express');

const routes = express.Router();
const PersonController = require('./controllers/PersonController');
// Rotas
routes.get('/personpj', PersonController.index);
routes.get('/personpj/:id', PersonController.show);
routes.put('/personpj/:id', PersonController.update);
routes.post('/personpj', PersonController.creat);
routes.delete('/personpj/:id', PersonController.destroy);
routes.get('/personpf', PersonController.index);
routes.get('/personpf/:id', PersonController.show);
routes.put('/personpf/:id', PersonController.update);
routes.post('/personpf', PersonController.creat);
routes.delete('/personpf/:id', PersonController.destroy);
module.exports = routes;
