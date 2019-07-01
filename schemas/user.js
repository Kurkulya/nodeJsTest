const mongoose = require('mongoose');
const roles = require('../constants/roles');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    role: { type: String, enum: Object.values(roles), default: roles.manager },
}, {
    toJSON: { virtuals: false },
});

userSchema.virtual('regions', {
    ref: 'Region',
    localField: '_id',
    foreignField: 'region_managers',
})

userSchema.virtual('restaurants', {
    ref: 'Restaurant',
    localField: '_id',
    foreignField: 'managers',
})

module.exports = userSchema;