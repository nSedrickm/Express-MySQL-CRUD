const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: '****',
    password: '****',
    database: '****'
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
app.use('/assets',express.static(__dirname + '/public'));

//route for homepage
app.get('/',(req, res) => {
    let sql = "SELECT * FROM ****";
    let query = connection.query(sql, (err, data) => {
      if(err) throw err;
      res.render('index',{
        data: data
      });
    });
  });

  app.listen(8001, () => {
    console.log('Server is running at port 8001');
  });