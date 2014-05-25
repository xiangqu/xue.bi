/**
 * Created by mdemo on 2014/4/17.
 */

var api = require('./api');
var web = require('./web');
var init = function(app){
    web(app);
};
exports.init = init;