
var mysql = require("mysql");
var inquirer = require("inquirer");



  var connectionDb = mysql.createConnection({

	host: "localhost",
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "",
	database: "bamazon"
});

connectionDb.connect(function (err) {
	if (err) throw err;
	console.log("Bamazon")
	console.log('Movies and Novels');
	displayPdts();
});
function Product(id, product_name, department_name, price, stock) {
	this.id = id;
	this.product_name = product_name;
	this.department_name = department_name;
	this.price = price;
	this.stock = stock;
}
function displayPdts() {

	connectionDb.query("SELECT * FROM bamazon.products ", function (err, res) {



		var productlist = res.map(function (val) {
			console.log(`ID: ${val.id}  PRODUCT: ${val.product_name}      DEPARTMENT: ${val.department_name}     PRICE: ${val.price}    QUANTITY: ${val.stock}`);
			return new Product(val.id, val.product_name, val.department_name, val.price, val.stock);

		});
		shop(productlist);
	});
}

function shop(productlist) {

	inquirer
		.prompt({
			name: "purchase",
			type: "list",
			message: "Pick the ID",
			choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
		})
		.then(function (answer) {
			var clientIdRawChoiceAmt = answer.purchase;
			var clientIdChoiceAmt = parseInt(clientIdRawChoiceAmt);
			getQuantity(clientIdChoiceAmt)
			console.log(clientIdChoiceAmt)
		})

}

function getQuantity (clientIdChoiceAmt, productlist){

	inquirer
	.prompt({
		name: "quantity",
		type: "input",
		message: "How many would you to purchase?"

	})
	.then(function (answer) {
		var clientRawChoiceAmt = answer.quantity;
		var clientChoice = parseInt(clientRawChoiceAmt);
		console.log ()
	});
	
}

		inquirer
	.prompt({
		name: "price",
		type: "confirm",
		message: "Is that okay?"

		
	})
		console.log("Updating quantity\n");


