'use strict';

/*
 * Module dependencies.
 */
var dotenv = require('dotenv');
dotenv.load();
var environment = process.env.NODE_ENV;
var express = require('express');
var router = express.Router();
var cors = require('cors');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var errorHandler = require('errorhandler');
var path = require('path');
var mongoose = require('mongoose');

/*
 * App configs
 */
var validate = require('./config/validation');
//todo update winston to log into log files -- temporary fix: use morgan and output to console
//var winstonConfig = require("./config/winston");

/*
 * Create Express server.
 */
var app = express();

//app.use(morgan('dev', {"stream": winstonConfig.stream}));
app.use(morgan('dev'));

/*
 * Connect to MongoDB.
 */
var config = require('./config/config.json')[environment];

mongoose.connect(config.host, config.db, config.port,
    config.credentials,
    function(err) {
        if (err) {
            throw err;
        }
    });


/*
 * Express configuration.
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower', express.static(path.join(__dirname, 'bower_components')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//@todo come back to setup jade
//app.set('view engine', 'jade');


app.use(cors());
//require('./routes/routes')(app);

/*
 * DEPRECATED. Please move these routes to routes.js
 * and modify the ./routes files accordingly
 */
var user = require('./routes/user');
var product = require('./routes/product');
var auth = require('./routes/auth/index');

/*
 * Disable api auth if were are in dev mode
 */
if(app.get('env') !== 'development') {
  app.use('/api/*', validate);
}

app.use('/auth', auth);
app.use('/api', user);
app.use('/api', product);
var engine = require('./routes/engine/index');
app.use(engine);

/*
 * Error Handler.
 */
app.use(errorHandler());

/*var server = require('http').createServer(app);
var io = require('socket.io')(server)
server.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode',
    app.get('port'),
    app.get('env'));
});*/

/*
 * Create Socket.io server.
 */
//var server = socketIO.createServer(io);

module.exports = app;
