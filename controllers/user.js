const User = require('../models/user');
const BaseController = require('./base');
const userSerializer = require('../views/user');

class UserController extends BaseController {
    constructor() {
        super();
        this.serializer = userSerializer;

        this.delete = super.delete(async (req, res) => User.delete(req.params.id));
        this.index = super.show(async (req, res) => User.get())
        this.create = super.create(async (req, res) => User.create(req.body))
        this.update = super.show(async (req, res) => User.update(req.params.id, req.body))
        this.show = super.show(async (req, res) => User.show(req.params.id))
    }

}

module.exports = new UserController();