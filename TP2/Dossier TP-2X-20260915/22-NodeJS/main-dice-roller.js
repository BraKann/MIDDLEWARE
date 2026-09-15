//npm init --yes
//npm install express
//npm install ip
//npm install axios


const express = require('express')
const ip = require('ip')

const app = express()
const ipAddress = ip.address()
const ipPort = 3000

app.use(express.json({
    inflate: true,
    limit: '100kb',
    reviver: null,
    strict: true,
    type: 'application/json',
    verify: undefined
}))

///////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send(`
    <h1>Simple Roll Dice Service</h1>
    <p>&nbsp;</p>
    <h2>Use JSON commands to roll a dice</h2>
    `)
})

app.post('/json', (req, res) => {
    let ans = ""
    let arrDiceFaces = []
    let x1

    switch (req.body['MessageType']) {
        case 'Command':
            ans = `Execute:${req.body['NodeCommand']}`
            switch (req.body['NodeCommand']) {
                case 'Roll-Dice':

                    if (req.body['Try'] == null) {
                        x1 = 1
                    } else {
                        x1 = req.body['Try']
                    }

                    arrDiceFaces = []
                    for (x2 = 0; x2 < x1; x2++) {
                        arrDiceFaces.push(
                            Math.floor(Math.random() * 6)
                        )
                    }

                    ans = arrDiceFaces
                    break
            }

            break

        default:
            ans += ` => Unknown Sensor Message Type => ${req.body.MessageType} !!!`
    }

    res.json({ 'Message': ans })
})

app.listen(ipPort, console.log(`Listening to ${ipAddress}:${ipPort} !!!`))
