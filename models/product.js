const mongoose = require('mongoose');

/*mongoose.connect('mongodb://127.0.0.1:27017/MyDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});*/

mongoose.connect('mongodb+srv://nghia:nghia123@test.y6lecmv.mongodb.net/');
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
