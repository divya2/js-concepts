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
