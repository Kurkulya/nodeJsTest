const mongoose = require('mongoose');
const restaurantSchema = require('../schemas/restaurant');
const { generateModel } = require('../helpers/models');

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);
const Restaurant = generateModel();

module.exports = new Restaurant(RestaurantModel, 'Restaurant');