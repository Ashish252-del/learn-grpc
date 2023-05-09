const express = require('express');
const { fetchTableRoomData, getOrCreatePokerTable } = require('./poker-service')
const app = express();
app.use(express.json());
const res = async ()=>{
   let a = await  fetchTableRoomData (1);
   console.log('res is ',a);
}
 res()

app.listen(4000,()=>{
    console.log('Cleint is running at 4000');
})