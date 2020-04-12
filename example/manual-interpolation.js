
// assume this is the payload of a browser request a.k.a. request body
const person = {
    "firstName": "foo",
    "lastName": "bar",
    "age": 1620
}

//----------------------//
// The procedure type 1
// ES5
//---------------------//

function InsertPerson(p) {
    return "insert into querytester.people(firstName,lastName,age) values('" + person.firstName + "','" + person.lastName + "'," + person.age + ")";
}

module.exports = InsertPerson(person); // insert into person(firstName,lastName,age) values('foo','bar',1620);