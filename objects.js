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
