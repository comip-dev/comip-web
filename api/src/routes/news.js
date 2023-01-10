const express = require("express");
const router = express.Router();
const newsController = require('../controllers/news')

router.get('/all', newsController.getAll)
router.get('/id/:id',newsController.getOne)
router.post('/edit',newsController.edit)
router.post('/add',newsController.add)
router.post('/remove',newsController.remove)

module.exports = router;