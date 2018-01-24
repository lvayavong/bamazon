// var mysql = require("mysql");
//
//
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//
//
//   user: "root",
//
//
//   password: "comicfan7",
//   database: "bamazon"
// });
//
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");
//   readColleges();
// });
//
// function readColleges() {
//   connection.query("SELECT name FROM products", function(err, res) {
//     if (err) throw err;
//
//
//     console.log(res);
//     connection.end();
//   });
// }

var mysql = require("mysql");
var inquirer = require("inquirer");


function Product(id, product_name, department_name, price, stock) {
	this.id = id;
	this.product_name = product_name;
	this.department_name = department_name;
	this.price = price;
	this.stock = stock;
}
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "comicfan7",
	database: "bamazon"
});

connection.connect(function (err) {
	if (err) throw err;
	console.log("-------Welcome to Bamazon-------")
	displayProducts();
});

function displayProducts() {

	connection.query("SELECT * FROM bamazon.products ", function (err, res) {



		var productsArr = res.map(function (val) {
			console.log(`ID: ${val.id}  PRODUCT: ${val.product_name}      DEPARTMENT: ${val.department_name}     PRICE: ${val.price}    QUANTITY: ${val.stock}`);
			console.log("----------------------------------------------------------------------------------------------------------\n");
			return new Product(val.id, val.product_name, val.department_name, val.price, val.stock);

		});
		shop(productsArr);
	});
}

function shop(productsArr) {

	inquirer
		.prompt({
			name: "purchase",
			type: "list",
			message: "What is the ID of the product you would to purchase? We have some cool things!",
			choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
		})
		.then(function (answer) {
			var idrawchoice = answer.purchase;
			var idchoice = parseInt(idrawchoice);
			getQuantity(idchoice)
		})

}

function getQuantity (idchoice, productsArr){

	inquirer
	.prompt({
		name: "quantity",
		type: "input",
		message: "How many would you to purchase?"

	})
	.then(function (answer) {
		var qrawchoice = answer.quantity;
		var qchoice = parseInt(qrawchoice);
		console.log(qchoice);
    
	});


}
