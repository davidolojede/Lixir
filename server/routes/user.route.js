const express = require("express")
const { shorten, render } = require("../controllers/user.controller")
const router = express.Router()

router.post("/shorten", shorten )

module.exports = router