/**
 * Created by mdemo on 2014/4/17.
 */

var mongoose = require('co-mongoose')();
module.exports = function *() {
    var User = mongoose.model('User');
    var users = yield User.findQ();
    var data = {};
    users._id = users._id + '';
    data.users = users;
    console.log(data);
    yield this.render('index', data);
};