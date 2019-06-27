const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', (error) => console.error('connection error:', error));
db.once('open', () => console.log('Connected to database'));

