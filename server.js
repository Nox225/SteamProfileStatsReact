const { response } = require('express');
const express = require('express');
var request = require('request');

const data = ['76561198157636908']
const garusID = '76561198091337593'
const myID = '76561198157636908'
const url = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?include_appinfo=true&key=A9940DEB8884111BDA327417C3880A21&steamid='

const app = express();
app.use(express.urlencoded({ extended: false }))

app.post('/api/games', function (req, res){
    data.push(req.body.name)
    res.redirect('/')
})

app.get('/api/games', (req, res) => {
    request(`${url}${data[data.length-1]}`, function (error, response, body) {
        var parsed = JSON.parse(body)
        res.json(parsed.response.games)
        });
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

