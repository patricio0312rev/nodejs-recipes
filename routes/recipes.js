var recipes = require('../recipes.json');
var router = require('express').Router();


router.get('/step/:id', (req, res) => {
  const { id } = req.params;

  // Obteniendo el recipe
  const recipe = recipes[+id - 1];

  // Validando si se encontró o no
  if (!recipe) {
    return res.status(400).send("NOT_FOUND");
  }
});
module.exports = router;

