const mongoose = require('mongoose');
const {Schema} = mongoose;

const newSchema = new Schema({
    googleId : String
});

mongoose.model('users', newSchema);