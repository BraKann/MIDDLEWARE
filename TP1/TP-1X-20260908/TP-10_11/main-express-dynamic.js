//npm init --yes
//npm install express ip ejs

const express = require('express')
const ip = require('ip')
const path = require('path')

const app = express()
const ipAddress = ip.address()
const ipPort = 3000


app.use(express.static(path.join(__dirname, "")))

app.set("view engine", "ejs")
app.engine('ejs', require('ejs').__express);
app.set("views", path.join(__dirname, ""))

///////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'webpage-static.ejs'))
})

app.get('/v2', (req, res) => {
    var rndNumber
    var x1, x2

    rndNumber = Math.floor(Math.random() * 6) + 1

    x1 = ipAddress.toString() + ":" + ipPort.toString()
    x2 = rndNumber.toString()

    res.render(path.join(__dirname, "webpage-dynamic.ejs"), {
        htmlNodeIP: x1,
        htmlDiceFace: x2
    })
})

app.listen(ipPort, console.log(`Listening to ${ipAddress}:${ipPort} !!!`))