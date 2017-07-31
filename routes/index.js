var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('home', { });
});


/** GET for test */
router.get('/test', function(req, res, next) {
  res.render('test');
})

module.exports = router;
