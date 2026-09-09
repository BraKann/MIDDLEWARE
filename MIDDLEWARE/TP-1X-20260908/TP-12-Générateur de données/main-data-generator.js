const express = require('express')
const dateformat = require('date-format')
const random = require('random')
const clone = require('clone')
const ip = require("ip")
const path = require('path')

const app = express()
const ipAddress = ip.address()
const ipPort = 3000

let timerDataGenerator = null
let arrRandomNumbers = []
let funcDataGenerator = null
let jsonSetting = null

app.use(express.json({
    inflate: true,
    limit: '100kb',
    reviver: null,
    strict: true,
    type: 'application/json',
    verify: undefined
}))

app.use(express.static(path.join(__dirname, "")))
app.set("view engine", "ejs")
app.engine('ejs', require('ejs').__express);
app.set("views", path.join(__dirname, ""))

///////////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    let x1

    if (arrRandomNumbers.length == 0) {
        x1 = []
    } else {
        x1 = arrRandomNumbers.slice(-20)
        x1.reverse()
    }

    res.render(path.join(__dirname, "webpage-data-generator.ejs"), {
        htmlDataPoints: x1
    })
})

app.post('/json', (req, res) => {
    let ans = ""
    let x1, x2, x3

    switch (req.body['MessageType']) {
        case 'Setting':
            ans = "Config/Update: "
            jsonSetting = clone(req.body)

            if (jsonSetting['DataGeneration'] != null) {
                switch (jsonSetting['DataGeneration']['DistributionType']) {
                    case 'Normal':
                        //Ecrire cette section
                        funcDataGenerator = (() => { return (0) })
                        break

                    case 'Uniform':
                         //Ecrire cette section
                        funcDataGenerator = (() => { return (0) })
                        break
                }
            }

            break;

        case 'Command':
            ans = `Execute:${req.body['NodeCommand']}`
            switch (req.body['NodeCommand']) {
                case 'Start':
                    //Ecrire/Compléter cette section
                    clearInterval(timerDataGenerator)
                    x1 = funcDataGenerator()
                    x1 = Math.round(x1 * 10) / 10
                    x2 = new Date()
                    x3 = dateformat('yyyy-MM-dd hh:mm:ss.SSS', x2)

                    arrRandomNumbers.push(
                        {
                            'TimeStampRaw': x2,
                            'TimeStampFormatted': x3,
                            'DataValue': x1
                        }
                    )

                    break

                case 'Stop':
                    //Écrire cette section
                    break

                case 'DeleteAllData':
                    //Écrire cette section
                    break

                case 'Fetch-Data':
                    ans = { 'DataPoints': arrRandomNumbers }
                    break
            }

            break

        default:
            ans += ` => Unknown Message Type => ${req.body['MessageType']} !!!`
    }

    res.json({ 'Message': ans })
})

app.listen(ipPort, console.log(`Listening to ${ipAddress}:${ipPort} !!!`))