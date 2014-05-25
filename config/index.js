/**
 * Created by mdemo on 2014/4/17.
 */

var node_env = process.env.NODE_ENV || 'development';
module.exports = require('./' + node_env);