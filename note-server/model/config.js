var mongoose = require('mongoose');
mongoose.connect('mongodb://119.23.15.173:27017', { useNewUrlParser: true });
// mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('connected succeed')
});

 module.exports = db ;