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

const AccountSchema = new Schema({
    username: String,
    password: String,
    name: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    role: {
        type: Number,
        default: 0
    }
}, {
    collection: 'account'
});

const AccountModel = mongoose.model('account', AccountSchema);

module.exports = AccountModel;

/* role
    0 : customer
    1 : seller
    3 : manager
*/
