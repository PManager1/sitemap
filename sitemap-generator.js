module.exports = function(width) {


var yourGlobalVariable = 'helo'; 


var mongoose = require('mongoose');
var _ = require('underscore'); 
var colors = require('colors')

console.log('underscore =', _);
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log(' db opened');
});

mongoose.connect('mongodb://localhost/test');




var movieSchema = new mongoose.Schema({
  title: { type: String }
, rating: String
, releaseYear: Number
, hasCreditCookie: Boolean
});


var Movie = mongoose.model('Movie3', movieSchema);


var mo ; 



Movie.find(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
  console.log('movies  =', movies); 
  mo = movies; 

  console.log('underscore  ~~~',_);

    var pluck =  _.pluck(movies, 'title');
    console.log('pluck ', pluck);
    console.log(' pluck [0] =', pluck[0]);


    for (var i = 0; i < pluck.length; i++) {

     var su =  { url: pluck[i],  changefreq: 'daily', priority: 0.3 }; 
      console.log(' su =',su);
      yourGlobalVariable = su; 
    };

console.log(' inside Movie fun yourGlobalVariable = '.white, yourGlobalVariable);
console.log('Find all movies ='.red, mo);  
});


  console.log(' outside Movie fun yourGlobalVariable = '.white, yourGlobalVariable);

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
