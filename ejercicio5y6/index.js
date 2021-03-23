const express = require ('express');
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.bodyParser());
const { check, validationResult } = require('express-validator');

app.post("https://reclutamiento-14cf7.firebaseio.com/personas.json", [

  check('nombre').exists(),
  check('nombre').notEmpty(),
  check('apellido').exists(),
  check('apellido').notEmpty(),
  check('nombre').isString(),
  check('apellido').isString(),
  check('dni').exists(),
  check('dni').notEmpty(),
  check('dni').isNumeric({ min:8, max: 10 }),
  check('dni').isLength({ min:8, max: 10 })

], function(req,res) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  res.setHeader('Content-Type', 'application/json');
  console.log(req.body);
  res.json(req.body);

});

app.listen('3000', function() {
  console.log('escuchando en puerto 3000');
})