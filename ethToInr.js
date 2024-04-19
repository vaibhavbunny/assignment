const mongoose = require('mongoose');

const axios = require('axios');

async function ethereumPriceInInr() {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
    const price = response.data.ethereum.inr;
    console.log(price);
}

module.exports = {ethereumPriceInInr};

