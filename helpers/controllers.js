const BaseController = require('../controllers/base');

const generateController = () => {
    const GeneratedClass = class extends BaseController {
        constructor(serializer, model) {
            super(serializer, model); 
        }
    };
    return GeneratedClass;
}

module.exports = { generateController };