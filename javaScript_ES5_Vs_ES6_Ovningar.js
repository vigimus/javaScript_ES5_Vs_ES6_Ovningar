// Gör ändringar så vi använder det senaste Javascript istället!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

//Nya sättet
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

//Det nya sättet att göra det på

const firstName = "John";
const lastName = "Doe";
const age = 50;
const eyeColor = "blue";

const person2 = {
   [firstName],
   [lastName],
   [age],
   [eyeColor]
}


var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

//Det nya sättet
const { firstName, lastName, age, eyeColor} = person;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

//Nya sättet
const okObj = {a, b, c};

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

//Nya sättet
function greet(name='John', city='Dallas') {
   return `Hello {$firstName} have I met you before? I think we met in {$city} last summer no???`;
}
greet()

// default arguments
// default age to 10;
function isValidAge = ( age=10 ) => age;

// Symbol
// Skapa en symbok som säger: "This is my first Symbol"
let sym = Symbol('This is my first Symbol');


// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//Nya sättet
const whereAmI = (username, location) => if (true) {
  "I am not lost";
} else {
   "I am totally lost!";
}


















