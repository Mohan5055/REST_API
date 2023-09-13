
const mongoose=require("mongoose");

const newschema=new mongoose.Schema({
    name:{
        type:String

    },
    class:{
        type:Number
    },
    email:{
        type:String
    },
    roll:{
        type:Number
    }
})

const userStudent=new mongoose.model('userStudent',newschema);

module.exports=userStudent