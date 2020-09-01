// Array Methods
// 1)forEach:does not return an array.
// Array of objects
const employee = [

    {
        emp_name:'mahesh',
        emp_gender : 'male',
        emp_age : 30
    },

    {
        emp_name:'jasmine',
        emp_gender : 'female',
        emp_age : 32
    },

    {
        emp_name:'suresh',
        emp_gender : 'male',
        emp_age : 31
    }
];

function showEmployee(person){
    console.log(person.emp_name.toUpperCase());
}

// call back function
employee.forEach(showEmployee);

employee.forEach(function(gender){
    console.log(gender.emp_gender.toUpperCase());

});

employee.forEach(function(age){
    console.log(age.emp_age.toFixed());
});

// 2)Map-returns an array
const family_list = [
    {
        family_head :'sreeram',
        age : 50,
        income_level : 10000,
        id : 1
    },

    {
        family_head :'jyothi',
        age : 45,
        income_level : 1000,
        id : 2
    },
    
    {
        family_head :'subramanyam',
        age : 23,
        income_level : 5000,
        id : 3
    }

];

const ages = family_list.map(function(vayaasu){
    return {
        name : vayaasu.family_head.toUpperCase(),
        earnings: vayaasu.income_level - 90,
        year : vayaasu.age - 3
    }
});

console.log(ages);

const names = family_list.map(function(person){
    return  `<h1 style=color:blue;> ${person.family_head.toUpperCase()} </h1>`
})

// document.body.innerHTML = names.join('');
console.log(names);

// 3)Filter:returns an array.

const young_earnings = family_list.filter(function(earnings){
    return earnings.income_level  > 5000;
})

console.log(young_earnings);

// 4)find:returns an object based on matching.
// returns unique value based on first preference.
const result = family_list.find(function(age){
    return age.id === 3;
});

console.log(result);

// 5)Reduce:iterates,
// acc-first parametre
// curr-second parametre
const hotel_menu =[
    {
        item_name : 'dosa',
        type : 'masala',
        price : 500
    },
    {
        item_name : 'puri',
        type : 'plane',
        price : 50
    },
    {
        item_name : 'idly',
        type : 'soft',
        price : 5
    }
];

console.log(hotel_menu);

const total = hotel_menu.reduce(function(acc,curr){
    console.log(`total ${acc}`);
    console.log(`current price : ${curr.price}`);

    acc = acc + curr.price;

    return acc;

},0);
console.log(total);

// Math Object:
const weight = 45.6;

// floor():
const over_weight = Math.floor(weight);

console.log(weight);

console.log(over_weight);

// ceil():

const price = 45.4;

const resultt = Math.ceil(price);

console.log(price);

console.log(resultt);

// sqrt():

const sqrt = Math.sqrt(25);
console.log(sqrt);

// PI():

const pi = Math.PI;
console.log(pi);

// min
// max
const rate = Math.min(25,34,79,05);
const ratee = Math.max(100,300,200,10000)
console.log(rate);
console.log(ratee);

// random
const random  = Math.random() * 10;
console.log(random);

// Date Object:
const date = new Date();

console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());

const sentence = `${date.getDate()} ${date.getDay()} ${date.getMonth()} ${date.getFullYear()} `;
console.log(sentence);

document.body.innerHTML = sentence;







