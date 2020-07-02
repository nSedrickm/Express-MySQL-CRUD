const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'raider',
    password: 'raider_dev',
    database: 'inventory_development'
});

connection.connect((err) => {
    if(err) {
        throw(err);
    }
    console.log('Connected')
});

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//route for homepage
app.get('/',(req, res) => {
    let sql = "SELECT * FROM Products";
    let query = connection.query(sql, (err, data) => {
      if(err) {
        res.render('error');
        throw err;
      }

      res.render('index',{
        data: data
      });
    });
  });

  app.listen(8001, () => {
    console.log('Server is running at port 8001');
  });