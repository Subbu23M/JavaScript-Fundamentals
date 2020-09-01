// changing backgroundcolor using 'dom'
// Document Object Model
// similar to css
// document.body.style.backgroundColor = 'green';

// document.body.style.color = 'red';

// document.body.style.textTransform ='uppercase';

// // getElementById(')
// document.getElementById('btn').style.textTransform = 'uppercase';



// // from here i got the code what i written in HTML and CSS.
// const btn = document.getElementById('btn').

// console.log(btn);

// const h2 = document.getElementById('title');

// h2.style.backgroundColor = 'blue';

// document.getElementById('tit').style.backgroundColor = 'yellow!';

// assigning document.getElementById(''); ->  variable using that variable name we can apply multiple styles. 
const tit = document.getElementById('tit');

tit.style.backgroundColor = 'yellow';
tit.style.color = 'red';
tit.style.textTransform = 'uppercase';
tit.style.fontSize = '2rem';
tit.style.fontFamily = 'cursive';

// getElementsByTagName

const headings = document.getElementsByTagName('h2');
// console.log(headings);

headings[0].style.color = 'red';
headings[1].style.color = 'black';

console.log(headings.length);

// document.getElementsByClassName

// document.querySelector-for individual element.
const exam = document.querySelector('#special');
exam.style.backgroundColor = 'green';

const item = document.querySelector('.item');
item.style.color = 'red';
item.style.listStyle = 'none';

// document.querySelectorAll-for all elements




// console.log(window);

// console.log(document);

// console.dir(document);
