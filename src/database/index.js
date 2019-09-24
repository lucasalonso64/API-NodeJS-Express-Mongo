const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/noderest', { useNewUrlParser: true }); //, { useMongoClient: true}
mongoose.Promise = global.Promise;

module.exports = mongoose;
