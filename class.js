// className
const first = document.getElementById('first');
console.log(first.className);

// textContent
console.log(first.textContent);


// We can assign the className dynamic
const second = document.getElementById('second');
second.className = 'colors';
second.className = 'text';
second.className = 'colors text';
// We can't assign multiple classNames to the HTML element it overwrites the parentElement.

const third = document.getElementById('third');

// By using var_name.classList.add('  ','   ');
third.classList.add('colors' ,'text');

// we can remove the additional classes by using var_name.classList.remove('className'); 
third.classList.remove('colors');

// whether className available/not
let result = third.classList.contains('text');
if(result){
    console.log('lorem');
}
else{
    console.log('noooo');
}

// We can create element and add text dynamically.
// createElement
// createTextNode
// appendChild-add the new element at the end

const resultElement = document.querySelector('#first');

const bodyD = document.createElement('h2');

document.body.appendChild(bodyD);

const text = document.createTextNode('Hello,World!');

bodyD.appendChild(text);

// We added the classes dynamically
bodyD.classList.add('colors','text');

document.body.appendChild(bodyD);

// insertBefore-Starting Position
// insertBefore(Element,location)
document.body.insertBefore(bodyD,resultElement);

// replaceChild(new,old);

const smallElement = document.createElement('h4');
const smallText = document.createTextNode(`I'm the Villan`);

smallElement.appendChild(smallText);

smallElement.classList.add('colors');

document.body.replaceChild(smallElement,bodyD);


const bigHeading = document.createElement('h2');

// Without using createTextNode and appendChild
// We can use innerText and then prepend

bigHeading.innerText = `I'm ram gopal varma fan`;

// We can add the styls dynamically
bigHeading.classList.add('colors','text');

document.body.prepend(bigHeading);

// remove   -var_name.remove();-removes the element with content from the console.
// removeChild

// innerHTML-displays the HTML Structure
const resultParagraph = document.querySelector('.firstpara');

console.log(resultParagraph.innerHTML);

// innerHtml helps us to add the html structure to the newElement without using textNode and createElement.

// We can use classList to add multiple styles


















