const mysql=require('mysql2/promise');

var mysqlpool=mysql.createPool({
      host:'localhost',
      user:'root',
      password:'Nishath123@',
      database:'employee_db'

});

mysqlpool.query("SELECT 1")
.then(data=>console.log(data))
.catch(err=>console.log('db connection failed. \n'+err))
