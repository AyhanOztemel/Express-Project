var express = require("express");
var app = express();

const fs = require('fs');


//var querystring=require('querystring');
var bodyParser = require("body-parser");
//const { request } = require("express");

//const { json } = require("body-parser");
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

const routerList=require('./routers/routersList')
app.use(routerList)
app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/index', function (req, res) {
    res.render('index',{title:"index"})
 //res.sendFile('./views/index.ejs',{root:__dirname});
});
//------------------------------------------------------------------
//-------------------------------------------------------------
app.get('/', function (req, res) {

  res.render("index",{title:"Ana Sayfa"});
});
//------------------------------------------------------------------
//--------------------------------------------------------------
app.get('/getAdd',function (req, res) {
  console.log("---------------------");
  console.log("req.guery methodu ile İsim :", req.query.fname.toUpperCase());
  console.log("req.guery methodu ile Soyisim :", req.query.lname);
  console.log(typeof req.query)
  
  fs.readFile('merhaba.json','utf-8', function (err, data) {
    if (err) throw err;
    //console.log(data);
    //console.log("0-------------------------------0");
   
    var ilaveData=JSON.parse(data);
    console.log(req.query.fname in ilaveData)
    //  console.log("1-------------------------------1");
    var k="k";
    var say=1;
   for( var j in ilaveData){ 
    say=say+1
   }
   var id=say
   say=say.toString()
   say=k+say
     ilaveData[say]=req.query
     ilaveData[say].id=id
     ilaveData[say].fname=ilaveData[say].fname.toUpperCase() 
     ilaveData[say].lname=ilaveData[say].lname.toUpperCase()

    // console.log("2-------------------------------2");
fs.unlink('merhaba.json',function(eer){ if (err) throw err;console.log("unlink mevcut dosya sıfırlanda tüm kayıtlar silindi")})
fs.appendFile('merhaba.json',JSON.stringify(ilaveData),function(eer){if (err) throw err;console.log("Append ile mevcut dosya revize edilerek oluşturuldu")

fs.readFile('merhaba.json','utf-8', function (err, data) {
if (err) throw err;
//console.log(data);
                       })
               
                })
              })
  // console.log("3-------------------------------3");
 
  res.send(`query get istek alındı <h1>get istek parametre alındı<br>
   ${"isim  :" + req.query.fname + " Soyisim :" + req.query.lname}</h1> `);
});
//------------------------------------------------------------------
//---------------------------------------------------------------
app.get('/deneme/:year?/:month?/:day?', function (req, res) {
  console.log("---------------------");
  //var gonder=req.params.year;
  console.log("req .params methodu ile :", req.params.year);
  console.log(typeof req.params.year)
  console.log("req .params methodu ile :", req.params.month);
  console.log("req .params methodu ile :", req.params.day);
  var {year}=req.params 
  var month=req.params.month
  var day=req.params.day
  //res.send(`<h1>get istek parametre alındı <br> ${"yıl :" + req.params.year + "<br>Ay :" + req.params.month + "<br>gün :" + req.params.day + "<br>--:"}</h1>`)
    res.render("paramsDeneme",{year:year,month:month,day:day})
});
//------------------------------------------------------------------
//----------------------------------------------------------------
app.get('/login', function (req, res) {
  res.render("login",{title:"LOGIN"});
});
//------------------------------------------------------------------
//-------------------------------------------------------------------
app.get('/calling', function (req, res) {    
  res.render("calling",{title:"QUERY"});
});
//------------------------------------------------------------------
//-------------------------------------------------------------------
app.get('/about', function (req, res) {
  res.render("about",{title:"ABOUT"});
});
//------------------------------------------------------------------
//------------------------------------------------------------------
app.post('/postAdd', urlEncodedParser, function (req, res) {
  
  console.log(req.method);
  console.log(typeof req.body)
  console.log("0---------------------0")
 
  fs.readFile('merhaba.json','utf-8', function (err, data) {
    if (err) throw err;
    //console.log(data);
   // console.log("0-------------------------------0");
    var ilaveDataPost=JSON.parse(data);
    var say=1;
    //console.log("1-------------------------------1");
    var k="k"
    for( var j in ilaveDataPost){ 
     say=say+1
    }
    var id=say
    say=say.toString()
    say=k+say
    ilaveDataPost[say]=req.body
    ilaveDataPost[say].id=id
    ilaveDataPost[say].fname=ilaveDataPost[say].fname.toUpperCase() 
    ilaveDataPost[say].lname=ilaveDataPost[say].lname.toUpperCase()
  // console.log("2-------------------------------2");
fs.unlink('merhaba.json',function(eer){ if (err) throw err;console.log("unlink mevcut dosya sıfırlanda tüm kayıtlar silindi")})
fs.appendFile('merhaba.json',JSON.stringify(ilaveDataPost),function(eer){if (err) throw err;console.log("Append ile mevcut dosya revize edilerek oluşturuldu")

// fs.readFile('merhaba.json','utf8', function (err, data) {
// if (err) throw err;
// console.log(data);})
               
                })
              })
  // console.log("3-------------------------------3");
 

  res.send(`${req.body.fname+"  "+req.body.lname+" file added"}`);
});
//------------------------------------------------------------------
//------------------------------------------------------------------
//var server = app.listen(8000);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`localhost:${port} -> You can access the api from this port !!! `);
});