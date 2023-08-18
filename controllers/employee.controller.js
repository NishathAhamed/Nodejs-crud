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

router.post('/', async (req, res) => {
    const newEmployeeData = req.body; // Assuming you're sending the employee data in the request body
    const newEmployeeId = await service.addEmployee(newEmployeeData);
    res.send("201");
});

router.put('/:id', async (req, res) => {
    const updatedEmployeeData = req.body;
    const success = await service.updateEmployee(req.params.id, updatedEmployeeData);
    res.send({ success });
});

router.delete('/:id', async (req, res) => {
    const success = await service.deleteEmployee(req.params.id);
    res.send({ success });
});
  



module.exports=router;