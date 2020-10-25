var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', currentPage: 'dashboard' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login', currentPage: 'login' });
});

router.get('/setting', function(req, res, next) {
  res.render('setting', { title: 'Express', currentPage: 'setting' });
});

module.exports = router;
