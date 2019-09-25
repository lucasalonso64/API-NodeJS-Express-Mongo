const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/noderest1', { useNewUrlParser: true ,  useUnifiedTopology: true, useFindAndModify: false }); //, { useMongoClient: true}
mongoose.Promise = global.Promise;

module.exports = mongoose;
