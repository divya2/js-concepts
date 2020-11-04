//Write the code which outputs prime numbers in the interval from 2 to n
let n = 10;
nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}

//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
//uncomment while running
/*  
//solution-1
let i = prompt("enter a number greater than 100", ""); 
if (i < 100) {
  let i = prompt("enter a number greater than 100", "");
} else {
  console.log("\n");
}
//solution-2
let num;
do {
  num = prompt("Enter a number greater than 100?", 0); 
} while (num <= 100 && num);
*/
