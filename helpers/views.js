const _ = require('lodash');

const serialize = (data, serializer) => {
    if(_.isArray(data)) {
        return _.map(data, serializer);
    } else if(_.isObject(data)) {
        return serializer(data);
    }
}

module.exports = { serialize };