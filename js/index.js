// Your code goes here
const navColor = document.querySelectorAll('.nav-link');

/*
navColor.onclick = function(event) {
    event.target.style.color = 'blue';
    console.log('working');
}*/
console.log(navColor);

navColor.forEach(function(element) {
    element.onclick = function(event) {
        event.target.style.textDecoration = 'underline';
        console.log('underlined nav');
    }
});

const funZone = document.querySelector('h1');
console.log(funZone);

funZone.addEventListener('mouseover', function(event) {
    event.target.style.color = 'blue';
    console.log('title is blue');
});

//const allElements = document.all;
//console.log(allElements);

/*
allElements.forEach(function(element) {
    element.keydown = function(event) {
        if (event.key === 'Escape') {
            event.target.removeEventListener();
        }
    }
});*/

const imageHeights = document.querySelectorAll('img');
console.log(imageHeights);

imageHeights.forEach(function(element) {
    element.ondblclick = function(event) {
        event.target.style.height = '50px';
        console.log('dbleclick works');
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        console.log('keydown works');
    }
});