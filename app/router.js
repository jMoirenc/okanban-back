const express = require('express');
const router = express.Router();

const listController = require ('./controllers/listController');

router.get("/lists", listController.getAllLists);
router.post("/lists", listController.addList);

router.get("/lists/:id", listController.getOneList);
router.patch("/lists/:id", listController.updateList);
router.delete("/lists/:id", listController.deleteList);

module.exports = router;