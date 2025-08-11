import express from 'express'
import morgan from 'morgan'
import connect from './db/db.js'
import userRoutes from './routes/user.routes.js'

connect()

const app = express()

app.use(morgan('dev'))//with this we can get the info. of which route has been clicked
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRoutes)


app.get('/', (req, res) => {
    res.send("Hello World")
})

export default app;