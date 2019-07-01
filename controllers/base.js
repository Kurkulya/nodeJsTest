
const { serialize } = require('../helpers/views');

const tryCatch = (callback) => async (req, res, next) => {
    try {
        await callback(req, res)
    } catch(e) {
        next(e);
    }
}

class BaseController {
    constructor(serializer, model) {
        this.serializer = (data) => serialize(data, serializer);
        this.model = model;

        this.delete = this.deleteAction(async (req, res) => model.delete(req.params.id));
        this.index = this.showAction(async (req, res) => model.get())
        this.create = this.createAction(async (req, res) => model.create(req.body))
        this.update = this.showAction(async (req, res) => model.update(req.params.id, req.body))
        this.show = this.showAction(async (req, res) => model.show(req.params.id))
    }

    deleteAction(callback) {
        return tryCatch(async (req, res) => {
            await callback(req, res);
            res.status(204).send('Deleted');
        });
    }

    createAction(callback) {
        return tryCatch(async (req, res) => {
            const data = await callback(req, res);
            res.status(201).json(this.serializer(data));
        });
    }

    showAction(callback) {
        return tryCatch(async (req, res) => {
            const data = await callback(req, res);
            res.json(this.serializer(data));
        });
    }
}

module.exports = BaseController;
