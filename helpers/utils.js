const mongoose = require('mongoose');

const isValidId = (id) => id && mongoose.Types.ObjectId.isValid(id.toString());

module.exports = { isValidId };