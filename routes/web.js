/**
 * Created by mdemo on 2014/4/17.
 */
var index = require('../controllers');
module.exports = function(app){
  app.get('/',index)
};