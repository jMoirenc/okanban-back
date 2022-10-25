const express = require('express');
const router = express.Router();

const listController = require ('./controllers/listController');
const cardController = require ('./controllers/cardController');

// Lists
router.get("/lists", listController.getAllLists);
router.post("/lists", listController.addList);

router.get("/lists/:id", listController.getOneList);
router.patch("/lists/:id", listController.updateList);
router.delete("/lists/:id", listController.deleteList);

router.get("/lists/:id/cards", listController.getOneListCards);

// Cards
router.post("/cards/:id/tag", cardController.associateTag);
router.delete("/cards/:id/tag/:tag_id", cardController.unasociateTag);

module.exports = router;