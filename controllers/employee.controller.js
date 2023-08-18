const express =require('express'),router=express.Router()

const db=require('../db')

//http:localhost:3000/api/employees/
router.get('/',async(req,res)=>{
  const [rows] =await db.query("SELECT * FROM employee")
    .catch(err=>console.log(err))
   res.send(rows)
})

module.exports=router;