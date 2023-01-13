const express = require("express");
const router = express.Router();
const newsController = require('../controllers/news')
const verifyJWT = require('../middleware/verifyJWT')

router.get('/all', newsController.getAll)
router.get('/id/:id',newsController.getOne)
router.post('/edit',verifyJWT,newsController.edit)
router.post('/add',verifyJWT,newsController.add)
router.post('/remove',verifyJWT,newsController.remove)

module.exports = router;