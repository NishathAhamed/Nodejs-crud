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

module.exports.addEmployee= async (employeeData) => {
    const [result] = await db.query("INSERT INTO employee (EmpID,Name, EmpCode, Salary) VALUES (?,?, ?, ?)", [
        employeeData.EmpID,
        employeeData.Name,
        employeeData.EmpCode,
        employeeData.Salary
    ]).catch(err => console.log(err));
    return result; // Return the ID of the newly inserted employee
}

module.exports.updateEmployee=async (id, employeeData) => {
    const result = await db.query("UPDATE employee SET Name=?, EmpCode=?, Salary=? WHERE EmpID=?", [
        employeeData.Name,
        employeeData.EmpCode,
        employeeData.Salary,
        id
    ]).catch(err => console.log(err));
    return 200; // Return true if the update was successful
}
module.exports.deleteEmployee= async (id) => {
    const result = await db.query("DELETE FROM employee WHERE EmpID=?", [id]).catch(err => console.log(err));
    return  200;
}