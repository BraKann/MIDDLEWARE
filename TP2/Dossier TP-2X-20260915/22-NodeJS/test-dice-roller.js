const axios = require('axios');
const urlDiceRoller = 'http://192.168.49.2:31616/json'


function sendAxiosPost(url, dataObj) {
    axios.post(url, dataObj)
        .then((res) => {
            if (res.data['Message']['DataPoints'] != null) {
                console.log(['Message']['DataPoints']);
            } else {
                console.log(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

sendAxiosPost(urlDiceRoller, {
    MessageType: 'Command',
    NodeCommand: 'Roll-Dice'
})

sendAxiosPost(urlDiceRoller, {
    MessageType: 'Command',
    NodeCommand: 'Roll-Dice',
    Try: 10
})


