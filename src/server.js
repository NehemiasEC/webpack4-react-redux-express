import express from 'express';
import webpack from 'webpack';

const app = express();

app.set('port',process.env.PORT || 3000);

app.get('/',(req, res)=>{
    res.send("Hello world")
});


app.get('/api',(req, res)=>{
    res.json({title:"Hola mundo"})
})

app.listen(app.get("port"),()=>{
    console.log("server on port ",app.get('port'))
})
