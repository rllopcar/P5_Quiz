var express = require('express');
// router express es un módulo de app express que permite modularizar la definicion de rutas en las aplicaciones express
//// Es un módulo qude app express en el ques se instalan MWs
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Esta sentencia envía la sentencia a un cliente, la respuesta incluye.
  //// Pagina HTML: generada con index.ejs, sustituyendo title por 'Express'.
  //// La cabecera de la respuesta HTTP generada con los datos incluidos en res.
  res.render('index', { title: 'Express' });
});

// Author page.
router.get('/author', (req, res, next) => {
  res.render('author');
});

module.exports = router;
