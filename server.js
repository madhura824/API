//creating the server

const http=require('http');  //importing http package

const app=require('./app') //file in same folder we use ./
const port=process.env.port || 3000 //use the port set in the environent variable ... if not use 3000

const server=http.createServer(app); 

server.listen(port);    //on localhost::3000 we will get a message that it works
