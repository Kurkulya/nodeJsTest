const Restaurant = require('../models/restaurant');
const restaurantSerializer = require('../views/restaurant');
const { generateController } = require('../helpers/controllers');

const RestaurantController = generateController();

module.exports = new RestaurantController(restaurantSerializer, Restaurant);