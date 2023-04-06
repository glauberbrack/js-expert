const obj = {}
const arr = []
const fn = () => {}

// internally, literal objects turn into explicit functions
console.log('new Object() is {}? ', new Object().__proto__ === {}.__proto__)
asserts.deepStrictEqual(new Object().__proto__, {}.__proto__);

// __proto__ is the object reference with it properties
console.log(
  "obj.__proto__ === Object.prototype",
  obj.__proto__ === Object.prototype
);
assert.deepStrictEqual(obj.__proto__, Object.prototype);

console.log(
  "arr.__proto__ === Array.prototype",
  arr.__proto__ === Array.prototype
);
assert.deepStrictEqual(arr.__proto__, Array.prototype);

console.log(
  "fn.__proto__ === Function.prototype",
  fn.__proto__ === Function.prototype
);
assert.deepStrictEqual(fn.__proto__, Function.prototype);

// __proto__ of Object.prototype is null
console.log('obj.__proto__.__proto__ === null', obj.__proto__.__proto__ === null)
assert.deepStrictEqual(obj.__proto__.__proto__, null)


// ---------
console.log('-------')

function Employee() {}
Employee.prototype.salary = () => "salary**";

// will have properties from the instance of employee
Supervisor.prototype = Object.create(Employee.prototype)
Supervisor.prototype.profitShare = () => "profitShare**"

Manager.prototype = Object.create(Supervisor.prototype);
Manager.prototype.monthlyBonuses = () => "monthlyBonuses**";

// we could access usiging prototype
console.log('Manager.prototype.salary()', Manager.prototype.salary())
// but, if we try to call directly, it will throw an error
// console.log('Manager.prototype.salary()', Manager.salary())

// If we don't call the 'new', the first __proto__ will always be an instance of Function, without heritage from our classes
// To access the classes withou the 'new', we could use prototype directly
console.log("Manager.prototype.__proto__ === Supervisor.prototype", Manager.prototype.__proto__ === Supervisor.prototype)
assert.deepStrictEqual(Manager.prototype.__proto__, Supervisor.prototype)


// When we use 'new', the __proto__ will receive the actual prototype
console.log('manager.__proto__: %s, manager.salary(): %s', new Manager().__proto__, new Manager().salary())
console.log('Supervisor.prototype === new Manager().__proto__.__proto__', Supervisor.prototype === new Manager().__proto__.__proto__)
assert.deepStrictEqual(Supervisor.prototype, new Manager().__proto__.__proto__)


console.log("-----");

const manager = new Manager();
console.log("manager.salary()", manager.salary());
console.log("manager.profitShare()", manager.profitShare());
console.log("manager.monthlyBonuses()", manager.monthlyBonuses());

assert.deepStrictEqual(manager.__proto__, Manager.prototype);
assert.deepStrictEqual(manager.__proto__.__proto__, Supervisor.prototype);
assert.deepStrictEqual(
  manager.__proto__.__proto__.__proto__,
  Employee.prototype
);
assert.deepStrictEqual(
  manager.__proto__.__proto__.__proto__.__proto__,
  Object.prototype
);
assert.deepStrictEqual(
  manager.__proto__.__proto__.__proto__.__proto__.__proto__,
  null
);

console.log("-----");
class T1 {
  ping() {
    return "ping";
  }
}

class T2 extends T1 {
  pong() {
    return "pong";
  }
}

class T3 extends T2 {
  shoot() {
    return "shoot";
  }
}

const t3 = new T3();

console.log(
  "t3 inherits null?",
  t3.__proto__.__proto__.__proto__.__proto__.__proto__ === null
);
console.log("t3.ping()", t3.ping());
console.log("t3.pong()", t3.pong());
console.log("t3.shoot()", t3.shoot());

assert.deepStrictEqual(t3.__proto__, T3.prototype);
assert.deepStrictEqual(t3.__proto__.__proto__, T2.prototype);
assert.deepStrictEqual(t3.__proto__.__proto__.__proto__, T1.prototype);
assert.deepStrictEqual(
  t3.__proto__.__proto__.__proto__.__proto__,
  Object.prototype
);
assert.deepStrictEqual(
  t3.__proto__.__proto__.__proto__.__proto__.__proto__,
  null
);

