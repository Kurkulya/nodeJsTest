
const { tryCatch } = require('../helpers/controllers');

class BaseController {
    delete(callback) {
        return tryCatch(async (req, res) => {
            await callback(req, res);
            res.status(204).send('Deleted');
        });
    }

    create(callback) {
        return tryCatch(async (req, res) => {
            const data = await callback(req, res);
            res.status(201).json(this.serializer(data));
        });
    }

    show(callback) {
        return tryCatch(async (req, res) => {
            const data = await callback(req, res);
            res.json(this.serializer(data));
        });
    }
}

module.exports = BaseController;
