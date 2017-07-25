var express = require('express');
var router = express.Router();

var data = require('../public/data/testData');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET main page. */
router.get('/main', function(req, res, next) {
  res.render('main', {});
});

/* GET data page. */
router.get('/data', function(req, res, next) {
  res.send(JSON.stringify(data));
});

module.exports = router;
