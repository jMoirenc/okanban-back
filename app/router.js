const express = require('express');
const csrf = require('csurf');
const router = express.Router();

const formController = require ('./controllers/formController');
const listController = require ('./controllers/listController');
const cardController = require ('./controllers/cardController');

const csrfProtection = csrf({ cookie: true });

// Form
router.get("/form", csrfProtection, formController.index);

// Lists
router.get("/lists", listController.getAllLists);
router.post("/lists", csrfProtection, listController.addList);

router.get("/lists/:id", listController.getOneList);
router.patch("/lists/:id", listController.updateList);
router.delete("/lists/:id", listController.deleteList);

router.get("/lists/:id/cards", listController.getOneListCards);

// Cards
router.post("/cards/:id/tag", cardController.associateTag);
router.delete("/cards/:id/tag/:tag_id", cardController.unasociateTag);

module.exports = router;