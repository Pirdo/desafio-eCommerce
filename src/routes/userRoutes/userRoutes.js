const router = require('express').Router();
const userController = require('../../controllers/userController/userController');

router.post('/user/create', userController.insertUser);

module.exports = router;
