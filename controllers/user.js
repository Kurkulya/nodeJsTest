const User = require('../models/user');
const { userSerializer } = require('../views/serializers');
const { generateController } = require('../helpers/controllers');

const UserController = generateController();

module.exports = new UserController(userSerializer, User);