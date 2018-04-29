# sqlHomework
This exercise creates a mySQL  Database called 'bamazon' and adds a datatable inside of that database called `products`.
The products table has the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

Seed Data is then entered for the applocation to work. 

The program fetches and displays all Products in teh Products table.
It then,prompts the users with two messages.

   * The ID of the product they would like to buy.
   * How many units of the product they would like to buy.

Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.
If not, the app tells the customer that the quantity in stock is not sufficient to meet their order and asks the to pick another item. 


**********
The app uses mySQL and node.js and has the dependencies - "mysql", "inquirer", "console.table"

