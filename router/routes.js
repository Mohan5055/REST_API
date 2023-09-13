const express=require('express');
const router=new express.Router();
const userStudent=require('../db/schema');


router.post('/student',async(req,res)=>{
    try{
        const addData=new userStudent(req.body)
        console.log(req.body)
        const insertData=await addData.save();
        res.status(201).send(insertData)
    }catch(error){
    res.status(400).send(error)
}})

//GET Request

router.get('/student',async(req,res)=>{
    try {
        const getData=await userStudent.find({})
        res.send(getData);
    } catch (error) {
        res.status(400).send(error);
    }
})

//GET Request by id

router.get('/student/:id',async(req,res)=>{
   try {
    
    const getData=await userStudent.findById(req.params.id)
    res.send(getData)
   } catch (error) {
    res.status(400).send(error)
   }
})

//PATCH Request by id of individules

router.patch('/student/:id',async(req,res)=>{
   try {
    const patchData=await userStudent.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.send(patchData)
   } catch (error) {
    res.status(500).send(error)
   }
})


//Delete Request by id

router.delete('/student/:id',async(req,res)=>{
  try {
    const deleteData=await userStudent.findByIdAndDelete(req.params.id)
    res.send(deleteData)
  } catch (error) {
    res.status(500).send(error)
  }
})


module.exports=router