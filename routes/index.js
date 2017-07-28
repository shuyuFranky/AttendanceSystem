var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index');
});

// //test
// function randomInt(min,max)
// {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
// function getRandomTimeStamps( min, max ){
//       var return_list = [];
      
//       var entries =  randomInt( min, max );
//       for ( var i =0; i < entries; i++ ){
//         var day = new Date();
        
//         //Genrate random
//         var previous_date = randomInt(0,365);
//         day.setDate( day.getDate() - previous_date );
        
//         return_list.push( day.getTime() );
//       }
//       return return_list;
// }

/** GET for test */
router.get('/test', function(req, res, next) {
  var data = require('../public/data/newData');
  res.render('test', { data: data.daily_activeness });
})

module.exports = router;
