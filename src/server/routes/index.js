var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/artworks', function(req, res, next) {
  res.render('index', { title: 'Artwork' });
});

module.exports = router;
