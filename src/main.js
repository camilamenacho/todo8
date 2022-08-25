import express from 'express'
import tips from './database/bd.js'
import controller from './controllers/controller.js'

const app = express()
app.use(express.json())

controller(app, tips)
const port = 3000;

app.listen(port, () => {
    console.log(`server open: http://localhost:${port}`)
})