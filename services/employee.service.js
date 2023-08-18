const db=require('../db')

module.exports.getAllEmployees=async()=>{
    const[rows]=await db.query("SELECT * FROM employee")
    .catch(err=>console.log(err))
    return rows;

}

module.exports.getAllEmployeeById=async(id)=>{
    const[row]=await db.query("SELECT * FROM employee WHERE EmpID=?",[id])
    .catch(err=>console.log(err))
    return row;
}