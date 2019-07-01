const _ = require('lodash');

const regionSerializer = (data) => {
    const region = _.pick(data, ['_id', 'name', 'restaurants']);
    if(region.restaurants) region.restaurants = _.map(region.restaurants, restaurantSerializer);

    return region;
}

const restaurantSerializer = (data) => {
    const restaurant = _.pick(data, ['_id', 'name', 'address', 'profit_per_month', 'region_id', 'managers']);
    if(restaurant.managers) restaurant.managers = _.map(restaurant.managers, userSerializer);
    return restaurant;
}

const userSerializer = (data) => {
    const user = _.pick(data, ['_id', 'name', 'role', 'regions', 'restaurants']);
    if(user.regions) user.regions = _.map(user.regions, regionSerializer);
    if(user.restaurants) user.restaurants = _.map(user.restaurants, restaurantSerializer);
    return user;
}

module.exports = { regionSerializer, restaurantSerializer, userSerializer };