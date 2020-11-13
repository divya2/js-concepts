let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log(fruits.length); //4

/*Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll*/

let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
styles.splice(1, 1, "Classics");
//styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);
styles.splice(0, 1);
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);
