const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const ctrl = require('./controller.js')

app.get('/api/houses', ctrl.getHouses) 
app.post('/api/houses', ctrl.createHouse) 
app.delete('/api/houses/:id', ctrl.deleteHouse) 
app.put('/api/houses/:id', ctrl.updateHouse)

app.listen(4004, () => console.log('Running on 4004'))