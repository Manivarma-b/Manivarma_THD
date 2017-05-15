var express = require('express');
var app = express();

var Client = require('mariasql');
var port = process.env.PORT || '3000';
var Sequelize=require('sequelize');
var sequelize = new Sequelize('mydb', 'root', 'mani123', {
  host: "127.0.0.1",
  port: 3306,
   dialect: 'mariadb'
})
//inserting data
var User = sequelize.define('sample', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

sequelize.sync().then(function() {
  return User.create({
    username: 'mani',
   password:'mani'
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});
app.listen(port);
console.log('running' +port)