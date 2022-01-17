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
  
  // Obteniendo stepIndex
  let stop = false;
  const stepIndex = recipe.timers.reduce((prev, currentTime, index) => {
    if (!stop) {
      if (currentTime >= elapsedTime) {
        stop = true;
      }
      return index;
    }

    return prev;
  }, 0);

  // Enviando respuesta final
  res.json({
    index: stepIndex
  });

});
module.exports = router;

