const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const { generateRoutes } = require('./helpers/routes')

const UserController = require('./controllers/user')

require('./database');

app.use(express.json());

app.use('/users', generateRoutes(UserController, ['index', 'create', 'delete', 'update', 'show']));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json(err);
});


app.listen(port, () => console.log(`Example app listening in port ${port}`));