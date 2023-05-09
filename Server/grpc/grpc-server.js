const grpc = require("@grpc/grpc-js");
const USER_PROTO_PATH = __dirname + "/user.proto";
const POKER_PROTO_PATH = __dirname + "/poker.proto";
require("dotenv").config();

let protoLoader = require("@grpc/proto-loader");
// const {lockBalanceOfUser} = require("../controllers/userController");
// const {getPokerTableRoomData, getOrCreateTable} = require("../controllers/pokerController");

const options = {
   keepCase: true,
   longs: String,
   enums: String,
   defaults: true,
   oneofs: true,
};

let userPackageDefinition = protoLoader.loadSync(USER_PROTO_PATH, options);
let pokerPackageDefinition = protoLoader.loadSync(POKER_PROTO_PATH, options);

const userProto = grpc.loadPackageDefinition(userPackageDefinition);
const pokerProto = grpc.loadPackageDefinition(pokerPackageDefinition);

const server = new grpc.Server();

server.addService(userProto.BalanceUpdateService.service, {
   UpdateBalance: (call, callback) => {
      console.log(call.request)
      console.log("UpdateBalance called");
      callback(null, {success: true});
   }
});

server.addService(userProto.LockBalanceService.service, {
   LockBalanceService: async (call, callback) => {
      console.log(call.request)
      console.log("LockBalanceService called");
      let res = "Tanish"
    //  let res = await lockBalanceOfUser(call.request);
      callback(null, res);
   }
});

server.addService(pokerProto.TableRoomDataService.service, {
   GetTableRoomData: async (call, callback) => {
      console.log('request is ',call.request)
      let res = 'Manish'
     // let res = await getPokerTableRoomData(call.request);
      callback(null, {message:'Ashish ji'});
   }
});

server.addService(pokerProto.TableDataService.service, {
   GetOrCreateTable: async (call, callback) => {
      console.log(call.request)
      let res = 'Ashish'
     // let res = await getOrCreateTable(call.request);
      callback(null, res);
   }
});

server.bindAsync(
   '0.0.0.0:5000',
   grpc.ServerCredentials.createInsecure(),
   (error, port) => {
      console.log("Server running at " + '0.0.0.0:5000');
      server.start();
   }
);

module.exports = server;