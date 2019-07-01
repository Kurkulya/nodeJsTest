const Restaurant = require('../models/restaurant');
const BaseController = require('./base');
const { restaurantSerializer } = require('../views/serializers');

class RestaurantController extends BaseController {
    constructor(serializer, model) {
        super(serializer, model);

        this.addRegionManager = super.showAction((req, res) => this.model.addManager(req.params.id, req.body))

    }
}

module.exports = new RestaurantController(restaurantSerializer, Restaurant);