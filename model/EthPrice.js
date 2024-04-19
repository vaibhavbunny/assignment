const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const priceSchema =new Schema({
    currPrice: {type: Number},
})

module.exports = mongoose.model('Price', priceSchema);
