const { deepStrictEqual } = require('assert')
let counter = 0
let counter2 = counter
counter++

// This will return: 
// counter: 0
// counter2: 1

const item = {counter: 0}
const item2 = item

// PRIMITIVE TYPES create a copy in memory
deepStrictEqual(counter, 0)
deepStrictEqual(counter2, 0)

// REFERENCE TYPES copy the memory address
item2.counter++;
deepStrictEqual(item, { counter: 1 })
item.counter++;
deepStrictEqual(item2, { counter: 2 });