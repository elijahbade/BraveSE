// Insstruction 1: Define the Items:
// Create an array of objects representing items in the shopping cart. Each object should have the following properties:
// name (string), price (number), quantity (number)
const items = [
    { name: 'Perfume', price: 50, quantity: 2 },
    { name: 'Cake', price: 10, quantity: 1 },
    { name: 'Sharwama', price: 5, quantity: 2 }
  ]; 


// Instruction 2: Calculate Subtotal:
// Write a function calculateSubtotal that takes the array of items as an argument and returns the subtotal 
// (sum of the price of each item multiplied by its quantity).

function calculateSubtotal(items) {
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
      subtotal += items[i].price * items[i].quantity;
    }
    return subtotal;
  }

// Instruction 3: Apply Discount:
// Write a function applyDiscount that takes the subtotal and a discount percentage as arguments. It should return the subtotal after applying the discount.

function applyDiscount(subtotal, discountPercentage) {
    return subtotal - (subtotal * (discountPercentage / 100));
  }


// Instruction 4: Calculate Tax:  Write a function calculateTax that takes the discounted total and a tax rate as arguments. It should return the total after applying tax.
function calculateTax(discountedTotal, taxRate) {
    return discountedTotal + (discountedTotal * (taxRate / 100));
  }

// Instruction 5 Calculate Final Total: Write a function calculateTotal that combines the previous functions to calculate the final total cost of the shopping cart.
function calculateTotal(items, discountPercentage, taxRate) {
    const subtotal = calculateSubtotal(items);
    const discountedTotal = applyDiscount(subtotal, discountPercentage);
    const total = calculateTax(discountedTotal, taxRate);
    return total;
  }
  

// Instruction 6 Test the Functions:

const discount = 3;
const tax = 5
const finalTotal = calculateTotal(items, discount, tax);
console.log("Final total:", finalTotal);

// Code has been tested with different items, discounts, and tax rates for verification purposes  
 