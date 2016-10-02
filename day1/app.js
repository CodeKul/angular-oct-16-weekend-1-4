'use strict'

var a = 10;
var b = 10;

var my = 10; // auto global

var $ = function(any){
  return document.querySelector(any);
};

console.log('Are they equal - ' + (my === b));

document.querySelector('b').textContent = 'Hello Content';
document.getElementById('idBold').innerHTML = 'Bold Hello';
$('#idBold').textContent = 'Bye';

var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
console.log('Yay, I love chocolate ice cream!');
} else {
  console.log('Awwww, but chocolate is my favorite...');
}

var myFunction =  function (p,q) {
    var h = 10;
    console.log(a+b+h);
};

console.log('My - '+my);
myFunction();

console.log(''+myFunction);
eval('var p = 10; var q = 20; console.log(""+(a+b));'); //hevy 
