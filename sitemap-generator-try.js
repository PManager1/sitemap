module.exports = function(width) {


var $ = require('cheerio');
var mongoose = require('mongoose');
var _ = require('underscore'); 
var colors = require('colors')


console.log( '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'.white);


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










  // console.log(' trend call ='.white, grabnhold());
  var changefreq_value = 'daily';
  var priority_value = '0.3';     



  return {

    sitemapUrls: function() {
     var urls = [
        { url: '/page-1/',  changefreq: 'daily', priority: 0.3 },
        { url: '/page-2/',  changefreq: changefreq_value,  priority: priority_value },
        { url: '/page-3/' }     // changefreq: 'weekly',  priority: 0.5
      ]    
      

      urls.push({ url: '/page-5/' });
      return urls;
    }, 




    plucked: function() {
     var o = {
              ptrends: []
          };

    var Trend = mongoose.model('Trend', trendSchema);          

    var Trend = function  () {
        var findmov = Trend.find(function(err, trends) {

        if (err) return console.error(err);
       
        var plucked = _.pluck(trends, 'tName');

        console.log('plucked   ~~~~ lin 77 '.green, plucked);

        _.extend( o.ptrends, plucked );

        console.log('o.ptrends  ~~~~ lin 81 '.green, o.ptrends);        

      });
  }

    console.log('returning back 2'.green);

    return o; 
    }






  };


}
