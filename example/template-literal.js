
// assume this is the payload of a browser request a.k.a. request body
const person = {
    "firstName": "Jow",
    "lastName": "Baz",
    "age": 1620
}

//----------------------//
// The procedure type 2
// ES6
//---------------------//

// destructure person and map each attribute to new varaibles
const { firstName: fn, lastName: ln, age: a } = person;

const keys = Object.keys(person); 
// returns an array of key object keys in the case of person the array
// would be [firstName, lastName, age];

// template literal syntax using reverse quotes
// template literal syntax can span multiple lines
const stringTemplate = `
    update person 
    set ${keys[2]} = ${a} 
    where ${keys[0]} = '${fn}' 
    and ${keys[2]} = '${ln}';
`;

const query = stringTemplate
    .split('\n') // use the line breaks from the template literal to create an array
    .map(part=>part.trim()) // use the map to return a new array minus the tabs
    .join(' '); // change the array back to a string minus the tabs and line breaks

// RESULT: update person set age = 1620 where firstName = 'Jow' and age = 'Baz'; 

// console.log('RESULT', query);

// module.exports = query;

// function query(...str) {
//     // console.log(p4);
//     // console.log(p3);
//     // console.log(p2);
//     console.log(str);
// }


