const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    ename: {type: String} ,
    platform: {type: String},
    meetlink: {type: String},
    edate: {type: String},
    etime: {type: String},

}, 
{
    collection: "event"
});

module.exports = mongoose.model('event', eventSchema);
