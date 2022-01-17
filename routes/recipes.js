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

  // Obteniendo elapsedTime de parámetros opcionales
  let { elapsedTime = '' } = req.query;

  if (!elapsedTime) {
    elapsedTime = 0;
  }
  
  // Asignando valor final a la variable
  elapsedTime = +elapsedTime;
});
module.exports = router;

