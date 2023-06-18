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

const InvoiceSchema = new Schema({
    customer: String,
    product: String,
    quantity: Number,
    ammout: Number
}, {
    collection: 'invoice'
});

const InvoiceModel = mongoose.model('invoice', InvoiceSchema);

module.exports = InvoiceModel;
