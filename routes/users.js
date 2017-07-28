var express = require('express');
var router = express.Router();

var data = require('../public/data/testData');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// /* GET persional page, which shows the attendance days. */
// router.get('/persion', function(req, res, next) {
//   res.render('persion', {});
// });

// /** GET persional page, which shows the attendance days in github styles. */
// router.get('/persiong', function(req, res, next) {
//   res.render('persiongstyle', {});
// });

/** GET persional page, both two ways above. */
router.get('/persionPage', function(req, res, next) {
  res.render('persionPage', {});
});

/* GET data page. */
router.get('/data', function(req, res, next) {
  res.send(JSON.stringify(data));
});

module.exports = router;
