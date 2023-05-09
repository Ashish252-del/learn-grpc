const { tableRoomDataService, tableDataService } = require( "./grpc-client")

//function for fetching table room data
async function fetchTableRoomData(tableId) {
  return new Promise((resolve, reject) =>
    tableRoomDataService.GetTableRoomData(
      { roomId: tableId },
      (error, response) => {
        if (error) {
          console.log("Error: ", error)
          return reject(error)
        }
        console.log("Response: ", response)
        return resolve(response)
      }
    )
  )
}

//function for fetching or creating table
async function getOrCreatePokerTable(roomId, userId, userName, chips) {
  return new Promise((resolve, reject) =>
    tableDataService.GetOrCreateTable(
      { userId, userName, chips, roomId },
      (error, response) => {
        if (error) {
          console.log("Error: ", error)
          return reject(error)
        }
        console.log("Response: ", response)
        return resolve(response)
      }
    )
  )
}
module.exports =  { fetchTableRoomData, getOrCreatePokerTable }
