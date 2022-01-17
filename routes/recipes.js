var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

module.exports = router;

