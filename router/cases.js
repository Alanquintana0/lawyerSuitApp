const express = require("express");
const multer = require("multer");
const router = express.Router();
const controller = require("../controllers/cases");

router.get('/', controller.list);

module.exports = router;