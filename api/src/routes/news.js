const express = require("express");
const router = express.Router();
const newsController = require('../controllers/news')
const imagesController = require('../controllers/images')
const verifyJWT = require('../middleware/verifyJWT')

router.get('/all', newsController.getAll)
router.get('/id/:id',newsController.getOne)
router.post('/edit',verifyJWT,newsController.edit)
router.post('/add',verifyJWT,newsController.add)
router.post('/remove',verifyJWT,newsController.remove)
router.post('/uploadImage',verifyJWT,imagesController.upload)

module.exports = router;