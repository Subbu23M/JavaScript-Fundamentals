// String properties
let value ='Subsbu'
let result = console.log(value.length);
console.log(result);

// String methods
// We are calling the value.
console.log(value.toUpperCase());
console.log(value.toLowerCase());

// characters based
console.log(value.charAt(3));
console.log(value.charAt(value.length-1));

// index based
console.log(value.indexOf('u'));

// trim()-reduces white spaces
let name = ' Subrama nyam';
console.log(name);
console.log(name.trim());

console.log(name.startsWith('subrama nyam'));
console.log(name.trim().toLowerCase().startsWith('subrama nyam'));

// includes-checks whether a character or string available/not.
console.log(name.includes('bra'));

// slice
console.log(name.slice(0,2));
console.log(name.slice(-3));

// Template Literals-ES6
// ``-Backtricks
// ${}-Interpolation

const firstName = 'subbu';
const lastName = 'sairam';
const resul = 'Hey its ' + firstName + ' and my ' + lastName;

console.log(resul);

// concatination using backtricks.
const res1 = `Hey its ${firstName} and my ${lastName}`;
console.log(res1);

// Array properties and methods.

let family = ['sreeram','jyothi','mahesh','sravani','avika'];

console.log(family.length);
console.log(family[1]);

console.log(family[family.length-1]);

// concat-combines number of arrays into one.
let relative = ['rathnamayaa','lakshmi','ashwini','pavan']

const result_family = family.concat(relative);
console.log(result_family);

// reverse
console.log(result_family.reverse());

// unshift-adds value in the beginning
result_family.unshift('subramanyam');
console.log(result_family);

// shift-removes first value
result_family.shift();
console.log(result_family);

// push-adds value at the end
result_family.push('jay')
console.log(result_family);

// pop-removes value at the end.
result_family.pop()
console.log(result_family);

//splice-removes value.[0,3].

// Exercise-1
const last_name = ['susya','lasya','prasya'];
const first_name = 'sreshty';
const resultt = [];



// for..loop
for(let i=0;i < last_name.length;i++){
    console.log(i);
    console.log(last_name[i]);
    const names = `${last_name[i]} ${first_name}`
    // console.log(names);
    resultt.push(names);
}
// console.log(last_name);
console.log(resultt);

// Exercise-1
const books = ['nestham','hanuman','avarodhaale','vijaya'];
const price = 100;

const final_price = [];

// push
// final_price.push(`${books[j]} ${price}`)

for(let j=0;j<books.length;j++){
    console.log(j);
    console.log(books[j]);

    const res = `${books[j]} ${price}`
    final_price.push(res);
}

console.log(final_price);

// Exercise-2
const electricityBill = [250,350,550,120];

const mob_bill = [25,49,2236];

function calculateTotal(arr){
    let total=0;
    for(let k=0;k<arr.length;k++)
    {
        total += arr[k];
        // total = total + arr[k];
    }
    
    // if...else
    if(total > 1000){
        console.log('Hey you are super');
    }
    else{
        console.log('you are waste');
    }
    return total;
}

const mob = calculateTotal(mob_bill);
console.log(mob);

const ele = calculateTotal(electricityBill);
console.log(ele);

console.log({
    mob,
    ele,
});

// undefined-we declare the variable but no assign the value.
// null-by default js decides it is zero(0).

const roll_number = 25 > 12;

if(roll_number)
{
    console.log('True');
}
else{
    console.log('False');
}

// Ternary Operator:
// Syntax: condition ? log : log;
roll_number ? console.log('great'): console.log('false');

// Global Variable -> Declared outside the code of block {}.And can be accessed any where.
let end_name = 'sreshty';
end_name = 'royal';

console.log(`Hey my name follows ${end_name} at the end of firstName`);

// Local Variable -> Declared within the { block of code}.Cant be accessed outside the block.
function add_name (){
    var naam = 'subbu';
    const vayaasu = 24;

    console.log(`Hey my name is ${naam} and ${vayaasu} years old.`);
}
add_name();

// global variable
const global_number = 24;

function addSum(num1,num2){
    // local variable
    const global_number = 3;
    const final = num1 + num2 + global_number;
    return final;
}
console.log(addSum(25,25));

function greetMorn(na){
    const my_age  = 25;
    console.log(`hey ${my_age}`);
}
greetMorn();

// 1
function greetMorning(greet){
    const hostel_fees = 5000;
    console.log(`Hey whats the ${greet} and ${hostel_fees}`);
}

// 2
function greetAfternoon(greeet){
    const hosstel_fees = 5000;
    console.log(`Hey whats the ${greeet} and ${hosstel_fees}`);
}

greetMorning('good');
greetAfternoon('bad');