/**
 * Created by mdemo on 2014/4/24.
 */
var mongoose = require('co-mongoose')();
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    id: String,
    name: String,
    avatar: String,
    provider: String,
    token: String,
    permission: {type: String, default: 'customer'}
});
mongoose.model('User', UserSchema);
