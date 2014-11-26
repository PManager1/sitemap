

module.exports = function(width) {
  return {

    sitemapUrls: function() {

     var urls = [
        { url: '/page-1/',  changefreq: 'daily', priority: 0.3 },
        { url: '/page-2/',  changefreq: 'monthly',  priority: 0.7 },
        { url: '/page-3/' }     // changefreq: 'weekly',  priority: 0.5
      ]    
      
      return urls;
    }, 



  };
}
