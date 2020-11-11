let user = {
  name: "John",
  age: 30
};

//add a property
user.place = "India";
console.log(user);

//update a property
user.place = "Chennai";
console.log(user);

//delete a property
delete user.place;
console.log(user);

for (let prop in user) {
  console.log(prop); // name, age
}

//Task -sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let res = 0;
for (let prop in salaries) {
  res += salaries[prop];
}
console.log(res);

//Task- Multiply numeric property by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let i in obj) {
    if (typeof obj[i] == "number") {
      obj[i] *= 2;
    }
  }
}

//objects references and copying
let username = { name: "John" };
let admin = username; // copy the reference
admin.name = "Pete";
console.log(username, admin);

//cloning
let clone = {};
for (let prop in user) {
  clone[prop] = user[prop];
}
clone.name = "Pete";
console.log(user, clone);

//object.assign()
let permissions1 = { canView: true };
Object.assign(user, permissions1);
console.log(user);
let clone1 = Object.assign({}, permissions1);
console.log(clone1);

//Objects & function
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}
let user1 = makeUser();
//alert( user1.ref().name );

/*Create an object calculator with three methods:
read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.*/

let calculator = {
  sum() {
    return this.val1 + this.val2;
  },
  mul() {
    return this.val1 * this.val2;
  },
  read() {
    this.val1 = +prompt("enter val 1", 0);
    this.val2 = +prompt("enter val 2", 0);
  }
};

//calculator.read();
//alert(calculator.sum());
//alert(calculator.mul());

/*There’s a ladder object that allows to go up and down:*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    // shows the current step
    //alert(this.step);
    return this;
  }
};
ladder
  .up()
  .up()
  .up()
  .down()
  .showStep();

let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

//alert(new A() == new B());

function Accumulator(value) {
  this.value = value;
  this.read = function() {
    this.value += +prompt("enter val", 0);
  };
}
let accumulator = new Accumulator(0); // initial value 1
/*accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); */
