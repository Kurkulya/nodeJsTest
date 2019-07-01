const mongoose = require('mongoose');
const userSchema = require('../schemas/user');
const { generateModel } = require('../helpers/models');
const BaseModel = require('./base');

const UserModel = mongoose.model('User', userSchema);

class User extends BaseModel {
    constructor(model) {
        super(model);
    }

    async get() {
        return this.model.find().populate('regions', '_id name').populate('restaurants', '_id name address region_id').lean();
    }
}

module.exports = new User(UserModel, 'User');