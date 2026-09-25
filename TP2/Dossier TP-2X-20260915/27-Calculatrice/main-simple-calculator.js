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
    <h1>Simple Calculator Service</h1>
    <p>&nbsp;</p>
    <h2>Use JSON commands to use the calculator</h2>
    `)
})

app.post('/json', (req, res) => {
    //Write this section
    let ans = 'N/A'
    let numbers = req.body['Numbers']

     switch (req.body['NodeCommand']) {
        case 'Add':
             ans = numbers.reduce((acc, i) => acc + i); 
        break

        case 'Subtract':
            ans = numbers.reduce((acc, i) => acc - i); 
        break

        case 'Multiply':
            ans = numbers.reduce((acc, i) => acc * i); 
        break

        case 'Divide':
            ans = numbers.reduce((acc, i) => acc / i); 
        break
    }
    res.json({
        'NodeCommand': req.body['NodeCommand'],
        'Numbers': req.body['Numbers'],
        'Answer': ans
    })
})

app.listen(ipPort, console.log(`Listening to ${ipAddress}:${ipPort} !!!`))
