const express = require('express');
const list = require('../Controllers/ListController');
const router = express.Router();

router.post('/addListItem', list.addListItem);
router.put('/updateListItem/:id', list.updateListItem);
router.delete('/deleteListItem/:id', list.deleteListItem);

module.exports = router;