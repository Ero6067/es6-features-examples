//* Destructuring Assignment

// let a, b;
// [a, b ] = [100, 200];
// Rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];

// ({a, b} = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// ({a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// console.log(a, b); // 100 200
// console.log(rest); // {c: 300, d: 400, e: 500}

//* Array Destructuring

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people; 

// console.log(person1, person2, person3); // John Beth Mike

//* Parse array returned from function
// function getPeople() {
//   return ['Tim', 'Dick', 'Steph'];
// }

// let person4, person5, person6
// [person4, person5, person6] = getPeople();

// console.log(person4, person5, person6); //Tim Dick Steph

//* Object Destructuring

const person = {
  name: 'Bruce Wayne',
  age: 28,
  city: 'Gotham',
  alias: 'Batman',
  sayHello: function(){
    console.log("I\'m Batman");
  }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 destructuring
// const { name, age, city, alias, sayHello } = person;

// console.log(name, age, city, alias);
// sayHello();