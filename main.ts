import { Server } from './server/server'
import { usersRouter } from './users/users.router'

const server = new Server()
server.bootstrap([usersRouter]).then(server => {
  console.log('Server on listening on:', server.application.address().port)
}).catch(error => {
  console.log('Server failed to start')
  console.error(error)
  process.exit(1)
})