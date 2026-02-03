1. Welcome Program

Question:
Ask user name using prompt(). Show alert and print message in console.

Answer:

let name = prompt("Enter your name");
alert("Hi " + name + ", Welcome to JavaScript Training");
console.log("Hi " + name + ", Welcome to JavaScript Training");

2. Console Methods Practice

Question:
Print 500 using different console methods and clear console.

Answer:

console.log(500);
console.warn(500);
console.error(500);
console.clear();

3. Data Type Identification

Question:
Create variables of different data types and print value with type.

Answer:

let str = "JavaScript";
let num = 100;
let bool = true;
let undef;
let empty = null;

console.log(str, typeof str);
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(undef, typeof undef);
console.log(empty, typeof empty);

4. Arithmetic Operations

Question:
Use a = 20, b = 5 and perform arithmetic operations.

Answer:

let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

5. Increment & Decrement

Question:
Demonstrate pre and post increment & decrement.

Answer:

let x = 10;

console.log(++x); // pre-increment
console.log(x++); // post-increment
console.log(--x); // pre-decrement
console.log(x--); // post-decrement
console.log(x);

6. Assignment Operators

Question:
Use assignment operators on num = 10.

Answer:

let num = 10;

num += 5;
console.log(num);

num -= 3;
console.log(num);

num *= 2;
console.log(num);

num /= 4;
console.log(num);

num %= 3;
console.log(num);

7. Array Access

Question:
Create array and access elements.

Answer:

let courses = ['HTML', 'CSS', 'JavaScript', 'React'];

console.log(courses[0]); 
console.log(courses[1]); 
console.log(courses[courses.length - 1]);
console.log(courses.length);

8. Modify Array

Question:
Add and remove elements from array.

Answer:

let tech = ['HTML', 'CSS', 'JavaScript'];

tech.push('React');
tech.pop();

console.log(tech);

9. Student Object

Question:
Create student object and print values.

Answer:

let student = {
  name: "Gowthami",
  age: 21,
  course: "JavaScript",
  city: "Chennai"
};

console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.city);

10. Nested Object Practice

Question:
Create nested object and access values.

Answer:

let company = {
  name: "Tech Academy",
  trainer: {
    name: "Arun",
    subject: "JavaScript"
  }
};

console.log(company.name);
console.log(company.trainer.name);
console.log(company.trainer.subject);