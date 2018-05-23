const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', userController.registerUser)

router.post('/login', userController.loginUser)

module.exports = router;
