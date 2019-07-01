const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const regionSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    region_managers: [{ type: ObjectId, ref: 'User' }],
}, {
    toJSON: { virtuals: false },
});

regionSchema.virtual('restaurants', {
    ref: 'Restaurant',
    localField: '_id',
    foreignField: 'region_id',
})

module.exports = regionSchema;