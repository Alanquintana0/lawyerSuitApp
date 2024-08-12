const express = require("express");
const multer = require("multer");
const router = express.Router();
const controller = require("../controllers/cases");

router.get('/', controller.list);
router.get('/:id', controller.index);
router.post('/', controller.create);
router.delete('/:id', controller.destroy);
router.put('/:id', controller.update);

module.exports = router;