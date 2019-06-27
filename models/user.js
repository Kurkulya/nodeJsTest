const mongoose = require('mongoose');
const userSchema = require('../schemas/user');
const { generateModel } = require('../helpers/models');

const UserModel = mongoose.model('User', userSchema);
const User = generateModel();

module.exports = new User(UserModel, 'User');