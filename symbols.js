//* Create a symbol
const sym1 = Symbol() //Not a new Symbol(), its a primitive type
const sym2 = Symbol('sym2');

console.log(Symbol() === Symbol());   // FALSE. Symbols cannot be the same
console.log(`Hello ${String(sym1)}`); // Hello Symbol()

//* Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1]  = 'Prop1';      //WRONG. It is just looking at the property. 
myObj[KEY2]   = 'Prop2';      //If you wanna use a variable as a property use the [x] syntax
myObj.key3    = 'Prop3';       
myObj.key4    = 'Prop4';       

console.log(myObj[KEY1]);     //Prop1
console.log(myObj[KEY2]);     //Prop2

//* Symbols are not enumerable in for...in
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`); 
  // Prints
  // key3: Prop3
  // key4: Prop4
}

//* Symbols are ignored when using JSON.stringify
console.log(JSON.stringify({key: 'prop'}));                 // {"key":"prop"}
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));    // {} aka empty object