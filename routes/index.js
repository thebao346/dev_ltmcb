const express = require('express');
const router = express.Router();
const userController = require('../controller/users');

//kd45UzTiPpcSHlSZ
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/classes', (req, res, next) => {
  res.render('layout', {
    contentPage: './classes/index'
  });
});

router.get('/login', (req, res, next) => {
  res.render('layout', {
    contentPage: './login/index'
  });
});

router.post('/login', userController.loginUser);

router.get('/user', userController.getUser);



router.get('/school', (req, res, next) => {
  res.render('layout', {
    contentPage: './school/index'
  });
})

module.exports = router;
