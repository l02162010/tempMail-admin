var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('post', { title: 'Express', currentPage: 'post' });
});

module.exports = router;
