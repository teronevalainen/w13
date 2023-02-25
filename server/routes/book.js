var express = require('express');
var router = express.Router();
var Books = require("../models/Book");

/* GET home page. */
router.post('/', function (req, res, next) {
    //console.log("?")
    Books.create({
        name: req.body.name,
        author: req.body.author,
        pages: req.body.pages
    }, (err) => {
        if (err) throw err;
        //console.log(Books)
        return res.send("ok");
    }
    )
});

module.exports = router;
