// Import stylesheets
import "./style.css";
import "./datatypes.js";
import "./challenges.js";
import "./objects.js";
import "./arrays.js";
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Variables - used to store this information
//Hoisting
hoistingVar = "Hello";
var hoistingVar;

//Temporal dead zone

/* letKeyword ="Hi";
let letKeyword; //Cannot access 'letKeyword' before initialization
*/

// Tasks
/*Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).*/

let name = "John";
let admin = name;
//alert(admin);
