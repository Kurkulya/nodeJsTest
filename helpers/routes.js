const express = require('express')
const mongoose = require('mongoose')

const settings = {
    index: {
        method: 'get',
        route: '/',
    },
    create: {
        method: 'post',
        route: '/',
    },
    show: {
        method: 'get',
        route: '/:id',
    },
    delete: {
        method: 'delete',
        route: '/:id',
    },
    update: {
        method: 'put',
        route: '/:id',
    },
}

const generateRoutes = (controller, actions = []) => {
    const router = express.Router();

    router.use('/:id', (req, res, next) => {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
            next({ status: 404, message: 'Invalid id' })    
        } else {
            next();
        }
    })

    actions.forEach(action => {
        if(!controller[action]) return;

        const { method, route } = settings[action];
        router[method](route, controller[action]);
    });
    
    return router;
};

module.exports = { generateRoutes };