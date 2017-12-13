var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')
var axios = require('axios')

var app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('views', __dirname + '/views')

app.get('/', function(request, response){
    response.render('home.ejs')
})

app.post('/', function(request,response){
    var calculate = request.body.names
    
  
});
  
function setting(){
    
    var fName = document.forms["loveCalculator"] ["fName"].value;
    
    var sName = document.forms["loveCalculator"] ["sName"].value;
    
    validateForm(fName, sName )
}

function validateForm(fName, sName) {
    var inputJuan = fName
    var inputTwo = sName
    
    if(inputJuan == " " || inputTwo == " "){ 
    var error = alert("Please fill out the boxes!")
    document.getElementById('error').innerHTMl = error
    } 
    else {
        calculate(inputJuan, inputTwo)
    }
}
    var port = process.env.PORT
    
    app.listen(port, function(){
        console.log(`App running on port ${port}` )
    })
    
//var port = process.env.PORT
//
//app.listen(port, function(){
//    console.log(`App running on port ${port}` )
//})
//var express = require('express')
//var logger = require('morgan')
////var bodyParser = require('body-parser')
//var app = express()
//
//app.set('view engine', 'ejs')
//
//app.use(express.static('views'))
////app.use(bodyParser.json())
////app.use(bodyParser.urlencoded({extended: false}))
//app.set('views', __dirname + '/views')
//app.use(logger('dev'))
//app.get('/', function(request,response){
//   
//    response.render('home.ejs')
//})
//
//app.post('/', function(request,response){
//    var calculate = request.body.names
//var port =  process.env.PORT || 8080
//
//app.listen(port,function(){
//    console.log('App running on port' + port)
//})
//

//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended: false}))
//
//app.set('views', __dirname + '/views')
//
//app.get('/', function(request, response){
//    response.render('home.ejs')
//})
//
//app.post('/', function(request,response){
//    var calculate = request.body.names
//    
//  
//});
//  
//function setting(){
//    
//    var fName = document.forms["loveCalculator"] ["fName"].value;
//    
//    var sName = document.forms["loveCalculator"] ["sName"].value;
//    
//    validateForm(fName, sName )
//}
//
//function validateForm(fName, sName) {
//    var inputJuan = fName
//    var inputTwo = sName
//    
//    if(inputJuan == " " || inputTwo == " "){ 
//    var error = alert("Please fill out the boxes!")
//    document.getElementById('error').innerHTMl = error
//    } 
//    else {
//        calculate(inputJuan, inputTwo)
//    }
//}
//
//
//var port = process.env.PORT
//
//app.listen(port, function(){
//    console.log(`App running on port ${port}` )
//})
//