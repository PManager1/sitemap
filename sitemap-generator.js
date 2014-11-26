module.exports = function(width) {



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




var Trend = mongoose.model('Trend', trendSchema);

var findmov = Trend.find(function(err, trends) {
  if (err) return console.error(err);
  // console.dir(trends);

  console.log(' trends  ==', trends);
  // console.log(' trends1  ==', trends[1]);




var plucked = _.pluck(trends, 'tName');
console.log(' get keys ='.red, plucked);



});



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



  };


}
