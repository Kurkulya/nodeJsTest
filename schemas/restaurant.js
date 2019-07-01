const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    address: { type: String, default: null },
    profit_per_month: { type: Number, default: 0 },
    region_id: { type: ObjectId, required: true },
    managers: [{ type: ObjectId, ref: 'User' }],
});

module.exports = restaurantSchema;