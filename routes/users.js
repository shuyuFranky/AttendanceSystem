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
  res.render('persionpage', {});
  //res.render('persionpage', {rawdata: data });
});

/* get data page. */
router.get('/data', function(req, res, next) {
  var rawdata = [
    {"date":"2017-07-24","hours":0},
    {"date":"2017-07-25","hours":4.5},
    {"date":"2017-07-26","hours":6.5},
    {"date":"2017-07-27","hours":7.5},
    {"date":"2017-07-28","hours":8.9},
    {"date":"2017-07-29","hours":9},
    {"date":"2017-07-30","hours":10},
    {"date":"2017-07-31","hours":11},
    {"date":"2017-08-01","hours":12},
    {"date":"2017-08-02","hours":4.5},
    {"date":"2017-08-03","hours":5.5},
    {"date":"2017-08-04","hours":2},
    {"date":"2017-08-05","hours":0},
    {"date":"2017-08-06","hours":0},
    {"date":"2017-08-07","hours":5.0},
    {"date":"2017-08-08","hours":10},
    {"date":"2017-08-09","hours":1},
    {"date":"2017-08-10","hours":6},
    {"date":"2017-08-11","hours":3},
    {"date":"2017-08-12","hours":9},
    {"date":"2017-08-13","hours":0}
  ];
  res.send(JSON.stringify(rawdata));
});

module.exports = router;
