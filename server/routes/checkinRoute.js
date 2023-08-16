const express = require('express')
const router = express.Router()
const addCheckIn = require("../controllers/checkinConroller")

router.post('/:id', addCheckIn)

module.exports = router