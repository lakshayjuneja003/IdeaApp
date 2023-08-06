const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        minlength:10,
        lowercase:true
    },
    password:{
        type: Number,
        required:true
    },
    userType:{
        type:String,
        required:true,
        default:"Customer",
        enum:["Customer","Admin"]
    }
},{
    timeStamp:true,
})
// define the collection name where it will be stored
module.exports = mongoose.model("user",userSchema)
