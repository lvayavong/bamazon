var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,


  user: "root",

 
  password: "comicfan7",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readColleges();
});

function readColleges() {
  connection.query("SELECT name FROM colleges", function(err, res) {
    if (err) throw err;

    
    console.log(res);
    connection.end();
  });
}
