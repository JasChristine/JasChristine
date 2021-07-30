//My age
const myAge = 25;
//Early years
let earlyYears = 2;
earlyYears *= 10.5;
//Later Years
let laterYears = myAge - 2;
//Number of dog years
laterYears *= 4;
//Me in dog years
const myAgeInDogYears = earlyYears + laterYears;

const myName = "Jasmine".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`
);
