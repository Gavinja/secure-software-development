var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "secure_database"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM login", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
 });
});
