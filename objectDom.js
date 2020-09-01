// Applying CSS styles to the HTML elements using DOM

document.body.style.backgroundColor = 'grey';

document.body.style.color = 'whitesmoke';

document.body.style.fontFamily = 'cursive';

document.body.style.textTransform = 'uppercase';

// selected the element by id
document.getElementById('btnn').style.textTransform = 'capitalize';

const btnn = document.getElementById('btnn');
// it displays html code
console.log(btnn.getAttribute('id'));

const name = btnn.nodeName;
// displays html element
console.log(name);

const css = btnn.style;
// displays css styles
console.log(css);

// console.log(window);

// Selecting the HTML element by ID
// Can apply multiple styles
const paraa = document.getElementById('paragraph');

paraa.style.backgroundColor = 'red';
paraa.style.color = 'whitesmoke';
paraa.style.fontFamily = 'cursive';
paraa.style.fontSize = '2rem';

// Selecting the elements by tagName
const headers = document.getElementsByTagName('h3');
console.log(headers);

headers[0].style.color = 'blue';
headers[1].style.color = 'orange';
console.log(headers.length);

const parties = document.getElementsByTagName('li');

parties[3].style.color = 'red';

console.log(parties);

// spread operator
const listPoliticalParties = [...parties];

listPoliticalParties.forEach(function(party){
    console.log(party);
});

console.log(listPoliticalParties);

// document.getElementByClassName('  ');
const listItems = document.getElementsByClassName('variety');
console.log(listItems.getAttribute('class'));

listItems[0].style.color = 'yellow';

listItems[1].style.fontSize = '3rem';

// document.querySelector('.' or '#');

const fruitTypes = document.querySelector('#Fruits');
// getAttribute
console.log(fruitTypes.getAttribute('id'));

// Apply styles only for the single item
const fruitItems = document.querySelector('.pandu');
// getAttribute
console.log(fruitItems.getAttribute('class'));
fruitItems.style.color = 'red';

// document.querySelectorAll()
// Apply styles for all elements

const fruitColor = document.querySelectorAll('.pandu');
console.log(fruitColor);

fruitColor.forEach(function(colorItem){
    console.log(colorItem);
    colorItem.style.color = 'orange';
    colorItem.style.textTransform = 'uppercase';
    colorItem.style.listStyle = 'none';
});

// Navigating the DOM
const pencilTypes = document.querySelector('#pencil');
// childNodes - displays the list with all white spaces
const allChildren = pencilTypes.childNodes;
// console.log(allChildren);

// children-displays without white spaces
const children = pencilTypes.children;
console.log(children);

console.log(pencilTypes.firstChild);
console.log(pencilTypes.lastChild);
console.log(pencilTypes.nextSibling);
console.log(pencilTypes.previousSibling.style.color = 'yellow');

// parentElement
console.log(pencilTypes.parentElement.parentElement.parentElement);

// previousElementSibling
// nextElementSibling

// nodeValue-displays content with firstChild  var_name.firstChild.nodeValue
// textContent without firstChild var_name.textContent
const h5Value = document.getElementById('specific');
console.log(h5Value);

// setAttribute




