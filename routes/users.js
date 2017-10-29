var express = require('express');
var router = express.Router();

var data = require('../public/data/testData');
var getDays = require('../public/js/getDays')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/** GET persional page, both two ways above. */
router.get('/persionPage', function(req, res, next) {
  res.render('persionpage', {});
  //res.render('persionpage', {rawdata: data });
});

/** GET persional page, both two ways above. */
router.get('/hw1', function(req, res, next) {
  res.render('hw1', {});
  //res.render('persionpage', {rawdata: data });
});

function getVirtulData(year) {
  year = year || '2017';

  var startDay = year.toString() + '-01-01';
  var endDay = year.toString() + '-12-31';
  
  console.log(startDay);
  console.log(endDay);
  
  var days = getDays(startDay, endDay); 
  
  console.log(days);
  
  var data = [];
  for (var i = 0; i<days.length; i++) {
    data.push(
      {
        "date": days[i],
        "hours": Math.floor(Math.random() * 20) / 2 
      }
    );
  }
  return data;
}

/* get data page. */
router.get('/data', function(req, res, next) {
  // var rawdata = [
  //   {"date":"2017-07-24","hours":0},
  //   {"date":"2017-07-25","hours":4.5},
  //   {"date":"2017-07-26","hours":6.5},
  //   {"date":"2017-07-27","hours":7.5},
  //   {"date":"2017-07-28","hours":8.9},
  //   {"date":"2017-07-29","hours":9},
  //   {"date":"2017-07-30","hours":10},
  //   {"date":"2017-07-31","hours":11},
  //   {"date":"2017-08-01","hours":12},
  //   {"date":"2017-08-02","hours":4.5},
  //   {"date":"2017-08-03","hours":5.5},
  //   {"date":"2017-08-04","hours":2},
  //   {"date":"2017-08-05","hours":0},
  //   {"date":"2017-08-06","hours":0},
  //   {"date":"2017-08-07","hours":5.0},
  //   {"date":"2017-08-08","hours":10},
  //   {"date":"2017-08-09","hours":1},
  //   {"date":"2017-08-10","hours":6},
  //   {"date":"2017-08-11","hours":3},
  //   {"date":"2017-08-12","hours":9},
  //   {"date":"2017-08-13","hours":0}
  // ];
  
  // default arguments
  var required_hours = 6;
  
  var rawdata = getVirtulData(2017); 
  var qd = rawdata.filter(function(item){
    return item.hours >= required_hours; 
  }).length;
  var ad = rawdata.filter(function(item){
    return item.hours >= 0;
  }).length;
  var data = {
    'rawdata': rawdata,
    'wd': rawdata.length,
    'qd': qd,
    'ad': ad
  };
  res.send(JSON.stringify(data));
});

module.exports = router;
