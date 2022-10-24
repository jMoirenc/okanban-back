const express = require('express');
const router = express.Router();

const listController = require ('./controllers/listController');

router.get("/lists", listController.getAllLists);

module.exports = router;