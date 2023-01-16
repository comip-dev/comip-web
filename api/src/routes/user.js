const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const verifyJWT = require("../middleware/verifyJWT");

router.post('/register', userController.registerUser)
router.post('/login',userController.loginUser)
router.post('/refresh',userController.refresh)
router.post('/logout',userController.logout)
router.get('/islogged',verifyJWT,userController.isLogged)

module.exports = router;