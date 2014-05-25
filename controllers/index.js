/**
 * Created by mdemo on 2014/4/17.
 */

var mongoose = require('co-mongoose')();
module.exports = function *() {
    var User = mongoose.model('User');
    var users = yield User.findQ();
    var data = {};
    data.users = users;
    yield this.render('index', data);
};