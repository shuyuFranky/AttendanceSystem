var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET main page. */
router.get('/main', function(req, res, next) {
  res.render('main', {});
});

module.exports = router;
