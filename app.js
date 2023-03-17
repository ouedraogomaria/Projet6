const express = require('express');
const app = express();
const bodyParser = require('body-Parser')

const mongoose = require('mongoose');
const sauceRoutes = require('./routes/sauce');

mongoose.connect('mongodb+srv://Mariatou:AMxVYxez0zCyA0Em@atlascluster.mt5niqf.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('/api/sauces', sauceRoutes);

module.exports = app;
