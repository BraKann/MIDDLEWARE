//npm init --yes
//npm install express ip

const express = require('express')
const ip = require('ip')

const app = express()
const ipAddress = ip.address()
const ipPort = 3000

app.get('/', (req, res) => {
    res.send('Welcome to my fist webpage !!!')
})

app.get('/v2', (req, res) => {
    res.send('Welcome to my second webpage, we have a lot to learn !!!')
})


app.listen(ipPort, console.log(`Listening to ${ipAddress}:${ipPort} !!!`))