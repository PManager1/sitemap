var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var _ = require('underscore');


var sm = require('sitemap');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();




console.log('~~~~~~~~~~~~~~~~~~~~~~~');

app.get('/sitemap.xml', function(req, res) {
  res.header('Content-Type', 'application/xml');
  res.send( sitemap.toString() );
});


// var sitemap = sm.createSitemap ({
//       hostname: 'http://example.com',
//       cacheTime: 600000
//     });
// sitemap.add({url: '/page-1/'});
// sitemap.add({url: '/page-2/', changefreq: 'monthly', priority: 0.7});
// sitemap.add({url: '/page-4/', changefreq: 'monthly', priority: 0.7});









var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log(' db opened');
});

mongoose.connect('mongodb://localhost/news');



var trendSchema = mongoose.Schema({
    tName: String,
    tName_h: String,    
    region: String
  });




var Trend = mongoose.model('Trend', trendSchema);

var findmov = Trend.find(function(err, trends) {
  if (err) return console.error(err);
  // console.dir(trends);



// sitemap.add({url: '/page-23/', changefreq: 'monthly', priority: 0.7});
// sitemap.add({url: '/page-45/', changefreq: 'monthly', priority: 0.7});


setTimeout(function(){


var sitemap = sm.createSitemap ({
      hostname: 'http://example.com',
      cacheTime: 600
    });
sitemap.add({url: '/page-1/'});
sitemap.add({url: '/page-2/', changefreq: 'monthly', priority: 0.7});
sitemap.add({url: '/page-4/', changefreq: 'monthly', priority: 0.7});


}, 3000);




  console.log(' trends  ==', trends);
  // console.log(' trends1  ==', trends[1]);




var plucked = _.pluck(trends, 'tName');
console.log(' get keys ='.red, plucked);









});











console.log('~~~~~~~~~~~~~~~~~~~~~~~ ');





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
