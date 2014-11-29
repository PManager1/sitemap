var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/robots.txt', function(req, res) {
  res.render('robots.txt', { title: 'Express' });
});



module.exports = router;
