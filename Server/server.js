 const express = require('express');
const app = express();
const grpcServer = require('./grpc/grpc-server')
app.use(express.json());

app.listen(8000,()=>{
    console.log('server is running at 8000');
})
