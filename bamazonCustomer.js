//import { isNull } from "util";

var mysql = require("mysql"); 
var inquirer = require("inquirer");
require("console.table"); 

//Connection 
var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon" 

})

connection.connect(function(err){
    if (err) throw err; 
    console.log("connected  as threadId " + connection.threadId + "\n"); 
    displayAllItems(); 
})


function displayAllItems(){

    connection.query("SELECT * FROM PRODUCTS", function(error, result){  
        if(error) throw error;    
    console.table(result); 
    promptForItemsToBuy(result);
    })
}

function promptForItemsToBuy(result){

    inquirer.prompt([
        {
            type: "input",
            name: "select",
            message: "Select the ID of the Product you want to Buy",
            validate: function(val){
                return !isNaN(val) ; 
            }
        }
    ]).then(function (val){
        var id = parseInt(val.select); 
        var dataRow = isAValidId(id, result ); 
       
        if (dataRow){
            inquirer.prompt([
                {
                    type: "input",
                    name: "qauntity",
                    message: "Enter the quantity you need",
                    validate: function(val){
                        return val > 0 ; 
                    }
                }
            ]).then(function(val){
                    var quantity = parseInt(val.qauntity);
                    if (quantity > dataRow.stock_quantity ){
                        console.log("We don't have so much in Stock !! Choose another Product");
                        displayAllItems();  
                    } 
                    else{
                        var cost = (quantity)*(dataRow.price); 
                        placeOrder(quantity, id, cost); 
                                                
                   }
                }    
            )           
        }
     })
}

function isAValidId(id, dataset){
    for (var i = 0; i < dataset.length; i++) {
        if (dataset[i].item_id === id) {
          // If a matching product is found, return the product
                return dataset[i];
            }
        }
        // Else return false 
        return null;
}

function placeOrder(quantity, id, cost){
    connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [quantity, id],
        function(err, res){
            if (err) throw err; 
            else{
                console.log("Thanks for the Purchase. You've been billed $"+ cost);
                displayAllItems(); 
            }
        }
    )
}