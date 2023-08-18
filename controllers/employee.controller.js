const express =require('express'),router=express.Router()

const service=require('../services/employee.service')

//http:localhost:3000/api/employees/
router.get('/',async(req,res)=>{
  const employees=await service.getAllEmployees()
   res.send(employees)
})

router.get('/:id',async(req,res)=>{
    const employee=await service.getAllEmployeeById(req.params.id)
     res.send(employee)
  })
  



module.exports=router;