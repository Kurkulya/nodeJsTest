const _ = require('lodash');

const serialize = (data, serilizer) => {
    if(_.isArray(data)) {
        return _.map(data, serilizer);
    } else if(_.isObject(data)) {
        return serilizer(data);
    }
}

module.exports = { serialize };