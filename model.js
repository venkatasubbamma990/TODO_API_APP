let mongoose = require('mongoose')
let todoSchema = new mongoose.Schema({
    // name:{type:String},
    // description:{type:String},
    // posted_at:{type:String},
    // posted_by:{type:String}
    title: {
        type:String , 
        required:true
    },

    created: {
        type: Date,
        default: Date.now
    },

    completed:{
        type:Number,
        //default:0
    },
    important: {
        type:Number,
        //default:0
    },
    add_to_day : {
        type:Number,
       // default:0
    },
    due_date: {
        type:Date,
        //default:Date.now
    },
    planned : {
        type:Number,
        //default:0
    },
    content : {
        type:String,
    }
})
let Todo = mongoose.model('todos',todoSchema);

module.exports = Todo