const { Router } = require('express');

const ServiceController = require('./app/Controllers/ServiceController');
const OrderController = require('./app/Controllers/OrderController');


const routes = new Router();

routes.post("/service", ServiceController.add);
routes.get("/service", ServiceController.show);

routes.get("/service/:id", ServiceController.showId);


routes.post("/order", OrderController.add);
routes.get("/order", OrderController.show);
routes.get("/order/:id", OrderController.showId);


module.exports = routes;