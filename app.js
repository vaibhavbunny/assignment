const express = require('express');
const {getHandler} = require('./model/transactionFetch');
const Price = require('./model/EthPrice');
const ethereumPriceInInr = require('./ethToInr');
const app = express();

const PORT = process.env.port || 5000;

app.get('/ii/:address', async (req, res) => {
    const address = req.params.address;
    const transactionData = await getHandler(address);
    res.send(transactionData || {});
});

app.get('/getEthPrice', async (req, res) => {
    
});

setInterval(ethereumPriceInInr, 10 * 60 * 1000)

app.listen(PORT,()=>{
    console.log("done");
})

