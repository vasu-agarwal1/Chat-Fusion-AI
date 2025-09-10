import 'dotenv/config'
import http from 'http'
import app from './app.js'

const port = process.env.PORT || 3000


const server = http.createServer(app)


server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// we have created server.js because we need to create http server using express
//  because we will be using socket.io