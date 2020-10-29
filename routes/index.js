var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/classes', (req, res, next) => {
  res.render('layout', {
    contentPage: './classes/index'
  });
});

router.get('/school', (req, res, next) => {
  res.render('layout', {
    contentPage: './school/index'
  });
})


module.exports = router;
