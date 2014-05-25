/**
 * Created by mdemo on 2014/4/17.
 */
var mongoose = require('co-mongoose')();
var init = function(mongoURI){
    mongoose.connect(mongoURI);
    mongoose.connection.on('error', function (err) {
        console.log(err)
    });

    mongoose.connection.on('disconnected', function () {
        mongoose.connect(mongoURI);
    });
    require('./user');
};

exports.init = init;