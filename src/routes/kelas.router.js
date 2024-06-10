const express = require("express");

const router = express.Router();

const { verifyToken } = require("../middlewares/auth");
const { index } = require("../controllers/kelas.controller");

router.get("/", verifyToken, index);

module.exports = router;
