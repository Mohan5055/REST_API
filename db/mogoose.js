
const mongoose=require('mongoose');
const DB=process.env.DB
mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error)
})
