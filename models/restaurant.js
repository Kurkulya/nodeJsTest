const mongoose = require('mongoose');
const restaurantSchema = require('../schemas/restaurant');
const BaseModel = require('./base');
const RegionModel = require('./region');
const UserModel = require('./user');

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

class Restaurant extends BaseModel {
    constructor(model) {
        super(model);
    }

    async get() {
        return this.model.find().populate('managers').lean();
    }

    async create(data) {
        const user = await UserModel.findById(data.manager_id)
        await RegionModel.findById(data.region_id)
        const restaurant = new this.model(data);
        restaurant.managers.push(user._id);
        const result = await restaurant.save();
        console.log(`${this.name} created`);
        return result;
    }

    async addManager(id, data) {
        const restaurant = await this.findById(id);
        const user = await UserModel.findById(data.manager_id);
        const result = await this.model.findOneAndUpdate(restaurant,
            { ...restaurant, managers: [...restaurant.managers, user._id]},
            { new: true, useFindAndModify: false }).lean();
        console.log(`Manager added to ${this.name}`);
        return result;
    }
}

module.exports = new Restaurant(RestaurantModel);