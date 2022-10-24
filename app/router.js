const express = require('express');
const router = express.Router();

const listController = require ('./controllers/listController');

router.get("/lists", listController.getAllLists);
router.get("/lists/:id", listController.getOneList);

module.exports = router;