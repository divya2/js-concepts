/*
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint is for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
object for more complex data structures.
symbol for unique identifiers.*/

//Task
let name = "Ilya"; //Ilya

//alert(`hello ${1}`); // hello 1

//alert(`hello ${"name"}`); // hello name

//alert(`hello ${name}`); //hello Ilya

let str = "Hello";
str.test = 5;
//alert(str.test);

//Uppercase the first characters
function capitalize(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize("divya"));
