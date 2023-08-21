const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { bloodGroupDetailsController } = require("../controllers/analyticsController");

const router = express.Router();


// get inventory records
router.get('/bloodGroup-details',authMiddleware,bloodGroupDetailsController);


module.exports = router;