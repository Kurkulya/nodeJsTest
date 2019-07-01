const express = require('express')
const { isValidId } = require('./utils');


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

const generateRoutes = (controller, actions = [], options = []) => {
    const router = express.Router();

    router.use('/:id', (req, res, next) => {
        if(!isValidId(req.params.id)) {
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

    options.forEach(({ method, route, action }) => {
        if(!controller[action]) return;

        router[method](route, controller[action]);
    });
    
    return router;
};

module.exports = { generateRoutes };