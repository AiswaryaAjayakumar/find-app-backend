const bodyParser = require('body-parser')
var express= require('express')
var mongoose=require('mongoose')
var num1,num2,result,check=0

var app= express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("WELCOME TO FIND APP")
})
app.post('/large',(req,res)=>{
    var getNum1=parseFloat(req.body.num1)
    var getNum2=parseFloat(req.body.num2)
   
  if (getNum1>getNum2)
    {
 res.json({'largest':getNum1})
    }else
    {
       res.json({'largest':getNum2})
    }
    app.post('/small',(req,res)=>{

    var getNum1=req.body.num1
    var getNum2=req.body.num2
    if(getNum1<getNum2){
        res.json({'smallest':getNum1})
    }else{
        res.json({'smallest':getNum2})
    }

    })
    
  
    
    
})
app.listen(process.env.PORT||3000,()=>{
    console.log("Server started at http://localhost:3000/")
})