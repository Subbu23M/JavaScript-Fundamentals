// variables-used to store the information,accessing,and can be modified.

let name = "subramanyam";

console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);

// just declare the variables
let state, country, nation;

console.log(state);
console.log(country);
console.log(nation);

// Now assign the values to those variables
state = "andhrapradesh";
console.log(state);

country = "India";
console.log(country);

nation = "Indian";
console.log(nation);

// let vs var vs const

// var with let
let first_name = "subbu";
first_name = "kumar";
console.log(first_name);

// with var
var last_name = "dindukurthi";
last_name = "sairam";
console.log(last_name);

// with const-once assigned cant be changed.
const pie = "3.14";
// pie='22.3'
console.log(pie);

// String Concatenation
const firstName = "subramanyam";
const lastName = "dindukurthi";

console.log(
  "Hey man how are you,after a long period i am meeting : " +
    firstName +
    "  " +
    lastName
);

const website = "johnsmilga";
console.log("https://www." + website + ".com");

// Data types

// 1) String-group of characters
const size = "Hello, World!";

// typeof returns its datatype
console.log(typeof size);

// 2) Number
const roll_number = 25;
console.log(typeof roll_number);

// 3) Boolean
let age11 = true;
let age2 = false;

console.log(typeof age11);
console.log(typeof age2);

// 4) Null
const result = null;
console.log(typeof result);

// 5) Undefined-returns when we forget to assign a value for the declared variable
let age, height;
console.log(typeof age, height);

// Arrays-Used to store characters,numbers,strings and objects

const family_list = [
  "Saibaba",
  "Shivayaa",
  "Hanuman",
  "Rama",
  "Lakshmana",
  "Swamy Vivekananda",
  "Ramakrishna",
  25,
  35,
];

console.log(family_list);
console.log(family_list[3]);
console.log(typeof family_list);

let family_group = family_list[4];

console.log(family_group);

// Changing value
family_list[2] = "Sita";
console.log(family_list);
console.log(family_list[2]);

// function
// Syntax: function functionName ()
// {
//     lines of code; called 'Declaration'
// }

// function can be called/invoked by using function_name.

function hello() {
  console.log("Hello,World!");
  console.log("Hello,There!");
  console.log("Hello,Escuseme!");
}

// function can be invoked number of times whereever you declared and can be called by using its name.
hello();
hello();
hello();

// Parametres-without using let/var/const just using their variable name,without declaring the value.
// Here parametre acts as a local variable.
// Arguments-when we calling the function with its value which we provided its may be a number.

function greet(name) {
  console.log("Hello, there " + name);
}

greet("subbu");
greet("subramanyam");
greet(25);

function add(age) {
  // local variable
  const new_age = age + 25;

  // explicitly should be call variable name,if not returns undefined.
  return new_age;
}
console.log(add(30));

const later = add(25);

console.log(later);

// Arrow Function from ES6.
const age1 = (value1, value2) => value1 * value2;

// Objects-We can store Strings,characters,numbers,booleans,null,undefined,arrays and functions
const family = {
  // property:value
  name: "Sai",
  age: 30,
  gender: "male",

  // Array
  members: ["surya", "ram", "ramya"],

  // function
  // method
  result: function () {
    console.log("Hello,World!");
  },
};
console.log(family);

console.log(typeof family);

// In the object properties can be accessed using 'dot' operator.

console.log(family.name);

console.log(family.gender);

family.age = 30;
console.log(family.age);

family.name = "ramayaa";
console.log(family.name);

// To access a funcion
family.result();

// Conditional Statements
// Values assigned explicitly by the user.
const value1 = 25 > 12;

const value2 = 55 < 12;

// Simple-if:
if (value2) {
  console.log("hello");
} else {
  console.log("people");
}

const num1 = 50;

const num2 = 42;

const num3 = num2 >= num1;

if (num1 > num2) {
  console.log("hello");
}
// else if helps to add additional condition.
else if (num3) {
  console.log("Heeee");
} else {
  console.log("Bye");
}

// = used for to assign a value
// == used for comparison.
// === used for comparison and checks whether it belongs to the same data type.

const year = 1996;
const year1 = 1996;
const year2 = "1996";

const result1 = year == year1;
const result10 = year1 === year2;

console.log(result1);
console.log(result10);

// Logical operators.
// OR ||

const school_name = "rbs";
const est_year = 1996;

// True || True = True
if (school_name == "rbs" || est_year == 1996) {
  console.log("yes");
} else {
  console.log("no");
}

// False || True = True
if (school_name == "gms" || est_year == 1996) {
  console.log("yes");
} else {
  console.log("no");
}

// True || False = True
if (school_name == "rbs" || est_year == 1997) {
  console.log("yes");
} else {
  console.log("no");
}

// False || False = False
if (school_name == "gmr" || est_year == 2018) {
  console.log("yes");
} else {
  console.log("no");
}

// Logical Operators &&
const schooll_name = "rbs";
const estt_year = 1996;

// True && True = True
if (schooll_name == "rbs" && estt_year == 1996) {
  console.log("yes");
} else {
  console.log("no");
}

// False && True = False
if (schooll_name == "rb" && estt_year == 1996) {
  console.log("yes");
} else {
  console.log("no");
}

// True && False = False
if (schooll_name == "rbs" && estt_year == 1999) {
  console.log("yes");
} else {
  console.log("no");
}

// False && False = False
if (schooll_name == "rb" && estt_year == 1991) {
  console.log("yes");
} else {
  console.log("no");
}

// !-not operator
// False && True = False
if (schooll_name !== "rbs" && estt_year == 1996) {
  console.log("yess");
} else {
  console.log("noo");
}

// Switch Statement
// Without break the iteration continues without end.
// No result without default
// When iteration wont satisfies then it prints default value
const dice = 10;

switch (dice) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;

  default:
    console.log("none");
}

// Types of Loops:
// > - --(decrement);
// < - ++(increment);
// for...loop

let i;
for (i = 0; i < 10; i++) {
  console.log("and the result: " + i);
}

for (let y = 29; y >= 27; y--) {
  console.log("and the final: " + y);
}

// While Loop:Condition first and block of code
// disadvantage-if condition fails there will be no result.
let amount = 5;

while (amount == 0) {
  console.log("I have " + amount + " rupees for shopping");
  amount--;
}
// 2
let amountt = 5;

while (amountt > 0) {
  console.log("I have " + amountt + " rupees for shopping");
  amountt--;
}

// Do-While loop:block of code and then condition.
let rupees = 0;
do {
  console.log("I have " + rupees + " for shopping");
  rupees++;
} while (rupees < 5);

// If condition is false then it executes atleast once.
let rupeess = 10;
do {
  console.log("I have " + rupeess + " for shopping");
  rupees++;
} while (rupeess > 20);