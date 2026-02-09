SECTION 1 – Real-Time Function Logic
1. Payroll System
function calculateSalary(basicSalary, bonusPercentage) {
  let bonus = (basicSalary * bonusPercentage) / 100;
  let grossSalary = basicSalary + bonus;
  let tax = grossSalary * 0.05;
  let finalSalary = grossSalary - tax;

  console.log("Basic Salary:", basicSalary);
  console.log("Bonus:", bonus);
  console.log("Tax (5%):", tax);
  console.log("Final Salary:", finalSalary);

  return finalSalary;
}

calculateSalary(30000, 10);

2. Student Result System
function generateResult(name, marksArray) {
  let total = 0;

  for (let mark of marksArray) {
    total += mark;
  }

  let average = total / marksArray.length;
  let grade;

  if (average >= 90) grade = "A";
  else if (average >= 75) grade = "B";
  else if (average >= 50) grade = "C";
  else grade = "Fail";

  return {
    name: name,
    total: total,
    average: average,
    grade: grade
  };
}

console.log(generateResult("Arun", [80, 75, 90, 85]));

SECTION 2 – Scope & Hoisting
3. Debug This Code
function demo() {
  if (true) {
    var a = 10;
    let b = 20;
  }

  console.log(a);
  console.log(b);
}

demo();

❌ What will happen?

10 will be printed

❌ Error: b is not defined

❓ Why?

var is function scoped

let is block scoped

✅ Fixed Code
function demo() {
  let a, b;

  if (true) {
    a = 10;
    b = 20;
  }

  console.log(a);
  console.log(b);
}

demo();

4. Hoisting Analysis
console.log(x);
var x = 100;

console.log(y);
let y = 200;

✅ Output
undefined
ReferenceError: Cannot access 'y' before initialization

Explanation

var is hoisted with value undefined

let is hoisted but stays in Temporal Dead Zone

SECTION 3 – Callback & Higher Order Functions
5. Order Processing System
function generateInvoice(orderId) {
  console.log("Invoice generated for order:", orderId);
}

function processOrder(orderId, callback) {
  console.log("Order Processed:", orderId);
  callback(orderId);
}

processOrder("ORD101", generateInvoice);

6. Bank Transaction System
let balance = 1000;

function sendSMS(message) {
  console.log("SMS:", message);
}

function transaction(amount, type, callback) {
  if (type === "deposit") {
    balance += amount;
  } else if (type === "withdraw") {
    balance -= amount;
  }

  callback("Transaction successful. Balance: " + balance);
}

transaction(500, "deposit", sendSMS);

SECTION 4 – Currying
7. Dynamic Price Builder
function priceBuilder(basePrice) {
  return function (discount) {
    return function (tax) {
      let discountedPrice = basePrice - (basePrice * discount) / 100;
      let finalPrice = discountedPrice + (discountedPrice * tax) / 100;
      return finalPrice;
    };
  };
}

console.log(priceBuilder(2000)(15)(18));

SECTION 5 – IIFE
8. Secure Company Module
const companyModule = (function () {
  let companyCode = "SEC123";

  return {
    getCompanyStatus: function () {
      return "Company Active";
    }
  };
})();

console.log(companyModule.getCompanyStatus());


✔ companyCode is private
❌ Cannot access directly

SECTION 6 – Generator
9. Unique Order ID Generator
function* orderIdGenerator() {
  let id = 1001;
  while (true) {
    yield "ORD" + id++;
  }
}

const gen = orderIdGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

10. Coupon Spin System
function* couponGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "50% OFF";
  yield "No Luck";
  yield "Jackpot";
}

const spin = couponGenerator();

console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);

SECTION 7 – Mini Project (Integrated)
const shop = (function () {
  let cart = [];

  function addToCart(product, price) {
    cart.push({ product, price });
  }

  function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }

  function applyDiscount(total) {
    return discount => total - (total * discount) / 100;
  }

  function* generateCoupon() {
    yield "10% OFF";
    yield "20% OFF";
  }

  function processPayment(amount, callback) {
    callback("Payment of " + amount + " successful");
  }

  return {
    addToCart,
    calculateTotal,
    applyDiscount,
    generateCoupon,
    processPayment
  };
})();

shop.addToCart("Phone", 20000);
let total = shop.calculateTotal();
let finalAmount = shop.applyDiscount(total)(10);

shop.processPayment(finalAmount, console.log);

CONCEPT QUESTIONS
1. Function Declaration vs Expression

Declaration is hoisted

Expression is not hoisted

2. Higher Order Function

A function that accepts another function or returns a function

3. Real-Time Generator Example

Infinite order IDs

Coupon systems

Pagination

4. Why IIFE?

Data privacy

Avoid global pollution

Secure modules

5. var vs let vs const
Keyword	Scope	    Reassign	Hoisted
var	    Function	Yes	         Yes
let  	Block	    Yes	         No
const	Block	    No	         No