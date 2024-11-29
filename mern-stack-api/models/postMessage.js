const mongoose = require('mongoose')

var PostMessage = mongoose.model('PostMessage',
{
    from: {type:String},
    to: {type:String},
    title : {type:String},
    message : {type:String},
},'postMessages')

module.exports = { PostMessage}