var express = require('express');
const Sequelize = require('sequelize');
// router express es un módulo de app express que permite modularizar la definicion de rutas en las aplicaciones express
//// Es un módulo qude app express en el ques se instalan MWs
var router = express.Router();
const { models } = require("../models/index")


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

// Credits
router.get('/credits', (req, res, next) => {
  res.render('credits')
})

router.get('/quizzes', (req, res, next) => {
 quizzes = models.quiz.findAll()
 res.render('quizzes')
})


module.exports = router;
