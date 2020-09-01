//Events in JS
// Select the element
// add addEventListener('event type',what to do)

const btn = document.querySelector('.color');

const heading = document.querySelector('h1');

// ananymous function
btn.addEventListener('click',function(){
    console.log('Hello,World!');
    heading.classList.add('color');
});

// callback function
function changeEvent() {
    console.log('Hello,Events in JS');
    let containsResult = btn.classList.contains('color');
    if(containsResult){
        btn.classList.remove('color');
    }
    else{
        btn.classList.add('color');
    }
}

btn.addEventListener('click',changeEvent);

// mouseup
// mousedown

const btnSubmit = document.querySelector('.btn');
// console.log(btnSubmit);

const header = document.querySelector('h2');
// console.log(header);

btnSubmit.addEventListener('click',function(){
    console.log('You clicked');
});

btnSubmit.addEventListener('mouseup',function(){
    console.log('up');
});

btnSubmit.addEventListener('mousedown',function(){
    console.log('down');
});

header.addEventListener('mouseenter',function(){
    header.classList.add('btn');
});

header.addEventListener('mouseleave',function(){
    header.classList.remove('btn');
});

const namePress = document.getElementById('name');
// console.log(name);

namePress.addEventListener('keypress',function(){
    console.log('you press');
});

namePress.addEventListener('keydown',function(){
    console.log('you press');
});

namePress.addEventListener('keyup',function(){
    console.log('you press');
});

// keyup events
// console.dir(namePress); - what we enter in the input box it shows as value = ----

// console.log(namePress.value); step by step

// event.currentTarget
heading.addEventListener('click',function(event){
    console.log(event.currentTarget);
    console.log(event.type);
});

// We are targeting h6 html element


// currentTarget VS Target
const buttons = document.querySelectorAll('.btns');
console.log(buttons);







