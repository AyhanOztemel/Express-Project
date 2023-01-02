var express = require("express");
const fs = require('fs');

exports.getId = (req, res) => {
  fs.readFile('merhaba.json', 'utf8', function (err, data) {
    if (err) throw err;
    var users = JSON.parse(data)
    //console.log(users)
    console.log("yapılan istek" + " " + req.query.id)
    for (var i in users) {
      if (req.query.id == users[i].id) {
        res.render("getid", { id: users[i].id, fname: users[i].fname.toUpperCase(), lname: users[i].lname.toUpperCase(), title: "Id'li Kullanıcı" });
        break;
      }
    }
  })
};
exports.getName = (req, res) => {
  fs.readFile('merhaba.json', 'utf8', function (err, data) {
    if (err)
      throw err;
    var users = JSON.parse(data);
    console.log("yapılan istek" + " " + req.query.fname.toUpperCase());
    for (var i in users) {
      if (req.query.fname.toUpperCase() === users[i].fname.toUpperCase()) {
        res.render("getFname", { id: users[i].id, fname: users[i].fname.toUpperCase(), lname: users[i].lname.toUpperCase(), title: "Ad'lı Kullanıcı" });
        break;
      }
    }
  });
};
exports.getLname = function (req, res) {
  fs.readFile('merhaba.json', 'utf-8', function (err, data) {
    if (err) throw err;
    var users = JSON.parse(data)
    console.log("yapılan istek" + " " + req.query.lname)
    for (var i in users) {
      if (req.query.lname.toUpperCase() === users[i].lname.toUpperCase()) {
        res.render("getLname", { id: users[i].id, fname: users[i].fname.toUpperCase(), lname: users[i].lname.toUpperCase(), title: "Soyad'lı Kullanıcı" });
        break;
      }
    }

  });
};
exports.allUsers=function (req, res) {
  fs.readFile('merhaba.json', 'utf8',function (err, data) {
    if (err) throw err;
    console.log(typeof data);
    //var users = data.toString();---->not use because error
    var users=JSON.parse(data);
    console.log(typeof users);    
   // res.send(users); rest api istek geldiğinde     
   res.render("allUsers",{users:users,title:"Kullanıcılar"});
})
};   