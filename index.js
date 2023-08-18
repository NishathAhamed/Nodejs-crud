const express=require('express'),app=express(),bodyparser=require('body-parser');
const db=require('./db'),employeeRoutes=require('./controllers/employee.controller')

app.use(bodyparser.json())
app.use('/api/employees',employeeRoutes)


db.query("SELECT 1")
.then(()=>{
      console.log('db connection succeeded.')
      app.listen(3000,console.log('server started at 3000'))

})
.catch(err=>console.log('db connection failed. \n'+err))
 