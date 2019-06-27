const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    stars: Number,
    location: String,
});

module.exports = restaurantSchema;