const mongoose = require('mongoose');

class BaseModel {
    async findById (id, model) {
        const result = await model.findById(id).lean();
        if(!result) throw { status: 404, message: 'Not found' };
    
        return result;
    }
}

module.exports = BaseModel;