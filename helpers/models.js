const BaseModel = require('../models/base');

const generateModel = () => {
    const GeneratedClass = class extends BaseModel {
        constructor(model, name) {
            super(model, name);
        }
    };
    return GeneratedClass;
}

module.exports = { generateModel };