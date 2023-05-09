import { userService } from "./grpc-client"

async function lockUserBalance(user_id, amount) {
  return new Promise((resolve, reject) =>
    userService.LockBalanceService({ user_id, amount }, (error, response) => {
      if (error) {
        console.log("Error: ", error)
        return reject(error)
      }
      console.log("Response: ", response)
      return resolve(response)
    })
  )
}

module.exports =  { lockUserBalance }
