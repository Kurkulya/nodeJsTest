const Region = require('../models/region');
const { regionSerializer } = require('../views/serializers');
const BaseController = require('./base');

class RegionController extends BaseController {
    constructor(serializer, model) {
        super(serializer, model);

        this.addRegionManager = super.showAction((req, res) => this.model.addRegionManager(req.params.id, req.body))
    }
}

module.exports = new RegionController(regionSerializer, Region);