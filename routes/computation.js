var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var num1 = Math.random();
  var num2 = Math.random();
  var num3 = Math.random();
  var cosFunction = Math.cos(num1);
  var asinFunction = Math.asin(num2);
  var asinhFunction = Math.asinh(num3);
  res.render('computation', 
    { 
        title: 'Shaik Ishaaq',
        num1:num1,
        num2:num2,
        num3:num3,
        cos:cosFunction,
        asin:asinFunction,
        asinh:asinhFunction
    });
});

module.exports = router;
