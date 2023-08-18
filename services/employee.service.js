const db=require('../db')

module.exports.getAllEmployees=async()=>{
    const[rows]=await db.query("SELECT * FROM employee")
    .catch(err=>console.log(err))
    return rows;

}