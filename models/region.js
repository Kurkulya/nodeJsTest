const mongoose = require('mongoose');
const regionSchema = require('../schemas/region');
const { generateModel } = require('../helpers/models');
const BaseModel = require('./base');
const UserModel = require('./user');

const RegionModel = mongoose.model('Region', regionSchema);

class Region extends BaseModel {
    constructor(model) {
        super(model);
    }

    async get() {
        return this.model.find().populate('restaurants').lean();
    }

    async create(data) {
        const user = await UserModel.findById(data.region_manager_id)
        const region = new this.model(data);
        region.region_managers.push(user._id);
        const result = await region.save();
        console.log(`${this.name} created`);
        return result;
    }

    async addRegionManager(id, data) {
        const region = await this.findById(id);
        const user = await UserModel.findById(data.region_manager_id);
        const result = await this.model.findOneAndUpdate(region,
            { ...region, region_managers: [...region.region_managers, user._id]},
            { new: true, useFindAndModify: false }).lean();
        console.log(`Region manager added to ${this.name}`);
        return result;
    }
}

module.exports = new Region(RegionModel);