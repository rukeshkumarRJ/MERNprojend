const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uname: {type: String},
    pwd: {type: String},
    name: {type: String},
    email: {type: String},
    design: {type: String},
    background:{type: String}
}, 
{
    collection: "user"
});

/*
Schema({obj},{collection})
*/
module.exports = mongoose.model('user', userSchema);
