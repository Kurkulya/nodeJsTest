const _ = require('lodash');
const { serialize } = require('../helpers/views');

const restaurantSerilizer = (user) => _.pick(user, ['_id', 'name', 'location', 'stars'])

const serializer = (data) => serialize(data, restaurantSerilizer);

module.exports = serializer;