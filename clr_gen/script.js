'use strict';

var color = ['White','Red','Blue','Green','Yellow','Violet']
var len = color.length-1;


var buttonControl = document.getElementById('btn');
var spanControl = document.querySelector('.color');

console.log(buttonControl);
console.log(spanControl);

function generateRandomNumber(){
    return Math.round(Math.random() * len)
}

buttonControl.addEventListener('click', () => {
    var index = generateRandomNumber();
    document.body.style.backgroundColor = color[index];
    spanControl.textContent = color[index]; 
})