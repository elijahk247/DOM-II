// Your code goes here

// loads a console log when the page is loaded up
document.addEventListener('load', console.log('The page as loaded'));


const navUnderline = document.querySelectorAll('.nav-link');
console.log(navUnderline);

// added underline and prevented default
navUnderline.forEach(function(element) {
    element.onclick = function(event) {
        event.target.style.textDecoration = 'underline';
        console.log('underlined nav');

        event.preventDefault();
    }
});

const funZone = document.querySelector('h1');
console.log(funZone);

// changes the target to a different color
funZone.addEventListener('mouseover', function(event) {
    event.target.style.color = 'blue';
    console.log('title is blue');
});

const imageHeights = document.querySelectorAll('img');
console.log(imageHeights);

imageHeights.forEach(function(element) {
    element.ondblclick = function(event) {
        event.target.style.height = '50px';
        console.log('dbleclick works');
    }
});

// console logs when a key is pressed down 
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        console.log('keydown works');
    }
});



//Testing for propagation
Array.from(document.all).forEach(function(element) {
    element.addEventListener('click', function(event) {
        console.log('Testing for propagation');
    });
});


const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

allParagraphs.forEach(function(element) {
    element.addEventListener('click', function(event) {
        console.log('This should not propagate');

        event.stopPropagation();
    });
});

// number 8 - 10

document.addEventListener('keydown', function(element) {
    if (element.key === 'PageUp') {
        allParagraphs.forEach(function(event) {
            event.style.fontSize = 'x-large';
        });
        console.log('PgUp is working');
    }
    if (element.key === 'PageDown') {
        allParagraphs.forEach(function(event) {
            event.style.fontSize = 'x-small';
        });
        console.log('PgDn is working');
    }
});