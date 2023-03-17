/*const express = require('express');

const router = express.Router();
const sauce = require('../models/sauce');

  
  app.post('/api/sauces', (req, res, next) => {
    delete req.body._id;
    const sauce = new sauce({
      ...req.body
    })
    sauce.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });
  
  app.put('/api/sauces/:id', (req, res, next) => {
    sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });
  
  app.get('/api/sauces/:id', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  });
  app.get('/api/auth/signup', (req, res, next) => {
    sauce.find()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({ error }));
  });

module.exports = router;*/