const express = require('express');
const pg = require('pg');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const layout = require('./views/layout');
const { db, Page, User } = require('./models');


const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}))

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get('/', (req, res, next) => {
    res.send(layout(''));
});

async function syncDatabase () {
    await db.sync({force:true});
    app.listen(8080);
};

syncDatabase();


