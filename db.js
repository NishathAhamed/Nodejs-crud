const mysql=require('mysql2/promise');

var mysqlpool=mysql.createPool({
      host:'localhost',
      user:'root',
      password:'Nishath123@',
      database:'employee_db'

});

module.exports=mysqlpool
