/**
 * Created by mdemo on 2014/4/17.
 */
// require package
var koa = require('koa');
var middlewares = require('koa-middlewares');
var hbs = require('koa-hbs');
var mongoose = require('co-mongoose')();

// require folder and files
var config = require('./config');
var models = require('./models');
var routes = require('./routes');


// init koa
var app = koa();
app.use(hbs.middleware({
    viewPath: __dirname + '/views',
    partialsPath: __dirname + '/views/partials',
    layoutsPath: __dirname + '/views/layouts'
}));
app.use(middlewares.bodyparser());
app.use(middlewares.jsonp());
app.use(middlewares.router(app));
app.use(middlewares.compress());

// init routes
routes.init(app);
// init models
models.init(config.mongoURI);

//run app
app.listen(config.port);
console.log('listening on port ' + config.port);
