require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECT_URI);
mongoose.connection
.once('open', function() {
    console.log('MongoDB running');
})
.on('error', function (err) {
    console.log(err);
})


const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    seller: String,
    quantity: Number,
    price: Number
}, {
    collection: 'product'
});

const ProductModel = mongoose.model('product', ProductSchema);

module.exports = ProductModel;
