const mongoose = require('mongoose');
const BaseModel = require('./base');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    nickname: String,
});

const UserModel = mongoose.model('User', userSchema);

class User extends BaseModel {
    async create(data) {
        const user = new UserModel(data);
        const result = await user.save();
        console.log('User created');
        return result;
    }

    async update(id, data) {
        const found = await super.findById(id, UserModel);
        const result = await UserModel.findOneAndUpdate(found, data, { new: true, useFindAndModify: false }).lean();
        console.log('User updated');
        return result;
    }

    async show(id) {
        return super.findById(id, UserModel);
    }

    async get() {
        return UserModel.find().lean();
    }

    async delete(id) {
        const result = await super.findById(id, UserModel);
        await UserModel.deleteOne(result);
        console.log('User deleted');
    }
}

module.exports = new User();