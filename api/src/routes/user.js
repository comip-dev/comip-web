const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/register', userController.registerUser)
router.post('/login',userController.loginUser)
router.post('/refresh',userController.refresh)
router.post('/logout',userController.logout)


module.exports = router;