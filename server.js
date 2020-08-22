const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// inicinado o app
const app = express();
app.use(cors());
app.use(express.json());

// iniciando o Mongo Db
const mongoConnectionString = 'mongodb://localhost/medprev';
mongoose.Promise = global.Promise;
mongoose.connect(mongoConnectionString,
  { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log('Conected'); }).catch((err) => { console.log(err); });

// Controle de rotas
requireDir('./src/models');
app.use('/api', require('./src/routes'));

app.listen(3001);
