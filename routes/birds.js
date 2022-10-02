const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("da birds route");
    res.end();
})

router.get("/fluffy", (req, res) => {
    res.send("da fluffy birds route");
    res.end();
})

router.get("/shiny", (req, res) => {
    res.send("da shiny birds route");
    res.end();
})

module.exports = router;