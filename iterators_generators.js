//* Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ? 
      { value: names[nextIndex++], done: false} :
      { done: true }
    }
  }
}

// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass int he names array
const names = nameIterator(namesArr);

// for(i = 0; i < namesArr.length; i++) {
//   console.log(names.next().value);
// }


//* Generator Example
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

// for ( const val of sayNames()) {
//   console.log(val);
// }

//* ID Creation
function* createIds(num) {
  let index = num;

  while(true) {
    yield index++;
  }
}

const gen = createIds(2);
console.log(gen.next().value);
