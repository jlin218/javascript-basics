// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/
"use strict";

var person = {
	fName: 'Jessica';
	lName: 'Lin';
	email: 'jlin218@uw.edu';
	getFullName: function() {return this.fName + ' ' + this.lName;}
};

console.log(person.getFullName());
console.log('running the getFullName function on person object');
//console.log('things you wanna say');
for (prop in person) {
	console.log(person[prop]);
}

//create a new img element
var elem = document.createElement('img');
element.src = 'img/dog.jpg';
element.alt = 'picture of my awesome, amazing dog';

//add this element to the top of the body
document.body.insertBefore(elem, document.body.firstChild);

//create a nre img element
vakitty = document.creteElement('img');
kitty.src = 'img/cat.jpg';
kitty.alt = 'picture og a cool cat';

//add this to the body of the page
document.body.appendChild(kitty);
