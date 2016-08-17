var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function pokemon(){
  return knex('pokemon');
};

function trainers(){
  return knex('trainers');
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/new', function(req, res, next) {
  res.render('new');
});
/* new restaurant post- redirects to home page */
router.post('/new/', function(req, res, next){
  var pokemonNew = {
    name: req.body.name,
    cp: req.body.cp,
    in_gym: req.body.in_gym
  };
  pokemon().insert(pokemonNew).then(function(result){
    res.redirect('/pokemon');
  });
});

module.exports = router;
