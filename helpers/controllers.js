const BaseController = require('../controllers/base');

const generateController = () => {
    const GeneratedClass = class extends BaseController {
        constructor(serializer, model) {
            super(serializer); 

            this.delete = super.delete(async (req, res) => model.delete(req.params.id));
            this.index = super.show(async (req, res) => model.get())
            this.create = super.create(async (req, res) => model.create(req.body))
            this.update = super.show(async (req, res) => model.update(req.params.id, req.body))
            this.show = super.show(async (req, res) => model.show(req.params.id))
        }
    };
    return GeneratedClass;
}

module.exports = { generateController };