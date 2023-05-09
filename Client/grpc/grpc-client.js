const grpc = require("@grpc/grpc-js")
const USER_PROTO_PATH = __dirname + "/user.proto"
const POKER_PROTO_PATH = __dirname + "/poker.proto"
let protoLoader = require("@grpc/proto-loader")
//require("dotenv").config();

let userPackageDefinition = protoLoader.loadSync(USER_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true
})

let pokerPackageDefinition = protoLoader.loadSync(POKER_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true
})

const UserService = grpc.loadPackageDefinition(userPackageDefinition)
  .LockBalanceService
const userService = new UserService(
  "localhost:5000",
  grpc.credentials.createInsecure()
)

const TableRoomDataService = grpc.loadPackageDefinition(pokerPackageDefinition)
  .TableRoomDataService
const tableRoomDataService = new TableRoomDataService(
  "localhost:5000",
  grpc.credentials.createInsecure()
)
const TableDataService = grpc.loadPackageDefinition(pokerPackageDefinition)
  .TableDataService
const tableDataService = new TableDataService(
  "localhost:5000",
  grpc.credentials.createInsecure()
)
console.log('Ashish ji');
module.exports = { userService, tableRoomDataService, tableDataService }
