var express = require('express');
var app = express();
var Web3 = require('web3');
var web3 = new Web3('https://mainnet.infura.io/v3/ad5e99c0b4274a698702b461b57a7f09'); // your geth

gen=()=> {
    return web3.eth.accounts.create();
}

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(200)
    var account = gen();
    var public_key = account.address;
    var private_key = account.privateKey;
    res.render('home', {
        public_key,
        private_key
    });
});


app.listen(3000, () => {
    console.log('Server Listening on http://localhost:3000/');
});