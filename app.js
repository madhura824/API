const express=require('express');  //manages servers and routes
const app=express(); //run express that we stored previously as a function

app.use((req,res,next)=>{  //use is a middleware , what ever data comes has to go through this middle ware(parameters passed to this middleware)

    res.status(200).json(
        {
            message: 'It works!!!'
        }
    );
})

module.exports=app;