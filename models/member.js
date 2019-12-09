const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for each member of aacf: their first name, last name, email, church, and graduation year
//this is what we build our GraphQL server on top of
const memberSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    church: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }

    
});

module.exports = mongoose.model('Member', memberSchema);