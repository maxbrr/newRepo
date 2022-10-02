const express = require("express")

const router = express.Router();

const stock = require("../database/dbModels/Stock.js");

router.get("/", (req, res) => {
    res.send("the beehive");
    res.end();
})

router.post("/hive", (req, res) => {
    let amount = req.body.pollum;
    
    console.log(stock.addPollum(amount));
    res.send("doneIt");
})

module.exports = router;