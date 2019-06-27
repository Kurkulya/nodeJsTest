const _ = require('lodash');
const { serialize } = require('../helpers/views');

const userSerilizer = (user) => _.pick(user, ['_id', 'name', 'nickname', 'age'])

const serializer = (data) => serialize(data, userSerilizer);

module.exports = serializer;