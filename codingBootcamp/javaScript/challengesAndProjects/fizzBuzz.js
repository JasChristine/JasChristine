//Fizz Buzz
// Start with the number one, and count upwards
// If any number is divisible by three, it is replaced by the word fizz
// If any number is divisible by five , it is replaced by the word buzz
//Numbers divisible by 15 become fizzbuzz.

//else if example

/* let num = 15;
if (num % 15 === 0) {
  console.log("fizzbuzz");
} else if (num % 5 === 0) {
  console.log("buzz");
} else if (num % 3 === 0) {
  console.log("fizz");
} else {
  console.log(num);
} */

//for loop example

for (let num = 0; num <= 150; num++) {
  if (num % 15 === 0) {
    console.log("fizzbuzz");
  } else if (num % 5 === 0) {
    console.log("buzz");
  } else if (num % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(num);
  }
}
