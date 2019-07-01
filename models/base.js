const { isValidId } = require('../helpers/utils');

class BaseModel {
    constructor(model, name) {
        this.name = name || this.constructor.name;
        this.model = model;
    }

    async findById (id) {
        if(!isValidId(id)) throw { status: 422, message: 'Invalid id' };

        const result = await this.model.findById(id).lean();
        if(!result) throw { status: 404, message: `${this.name} not found` };
    
        return result;
    }

    async create(data) {
        const user = new this.model(data);
        const result = await user.save();
        console.log(`${this.name} created`);
        return result;
    }

    async update(id, data) {
        const found = await this.findById(id);
        const result = await this.model.findOneAndUpdate(found, data, { new: true, useFindAndModify: false }).lean();
        console.log(`${this.name} updated`);
        return result;
    }

    async show(id) {
        return this.findById(id);
    }

    async get() {
        return this.model.find().lean();
    }

    async delete(id) {
        const result = await this.findById(id);
        await this.model.deleteOne(result);
        console.log(`${this.name} deleted`);
    }
}

module.exports = BaseModel;