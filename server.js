require('dotenv').config();
const express=require('express');
const router=require('./router/routes')
const app=express();
require('./db/mogoose')

app.use(express.json())
app.use(router)


app.listen(process.env.PORT,()=>{
    console.log(`port is listening at port no ${process.env.PORT}`)
})