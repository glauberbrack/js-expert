// https://dorey.github.io/JavaScript-Equality-Table/
// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839
// wtfjs.com

// stric operator ===
// loose operator ==

// INPUT: true + 2
// OUTPUT: 3

// INPUT: true - 2
// OUTPUT: -1

// INPUT: '21' + true
// OUTPUT: '21true'

// INPUT: '21' - true
// OUTPUT: 20

// INPUT: 9999999999999999 // input 9 for 16 times
// OUTPUT: 10000000000000000

// INPUT: 0.1 + 0.2 === 0.3
// OUTPUT: false

// -------------------------------------------------

// Conversions
// If we want to convert a value to string we can do it in explict or implicit way
// Explicit: String(123)
// Implicit: 123 + ''

https: console.assert(String(123) === "123", "explicit conversion to string");
console.assert(123 + '' === "123", "implicit conversion to string");

// If Statements 
// If we have a null or 1, null will be true and 1 is true, so it's return the console
if(null || 1) {
  console.log('validation null || 1')
}

// In this case the condition will be true as well
if ('hello' || 1) {
  console.log("validation 'hello' || 1");
}

// But, if we want to know what returns from the expression
const r = 'hello' || 1 
console.log('r', r)
if(r){
  console.log("validation r")
}
// in this case, we are going to see that te expression always retuns the first argument if both are true

console.assert(("hello" || 1) === "hello", "|| operator will always returns the first of element if both are true");
console.assert(("hello" && 1) === 1, "&& operator will always returns the last of element if both are true");

// -------------------------------------------------

const item = {
  name: "Glauber",
  age: 25,
  // string: if not primitive, call valueOf
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  // number: if not primitive, call toStirng
  valueOf() {
    return 007;
  },
  // this one has priority above all
  [Symbol.toPrimitive](coercionType) {
    console.log('trying to convert to', coercionType)
  }
};

console.log("toString", String(item));
console.log("valueOf", Number(item));

// If on object, our valueOf return { hey: 'hello' }
// the console will returns NaN cause the toString returns a string
console.log("valueOf", Number(item));

// after add toPrimitive, it will has the priority.
