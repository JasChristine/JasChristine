//Array Work!

//Using `map` write a function that converts fahrenheit to celsius.
//eg: getCelsius([23, 140, 212, 41]) => [-5, 60, 100, 5]

let fahrenheit = [23, 140, 212, 41];

const getCelsius = () => {
  return fahrenheit.map((value) => ((value - 32) * 5) / 9);
};

console.log(getCelsius());

//Using `some` write a function that checks an array for a 'falsey' value.
//eg: checkForFalsey([11, NaN, [], {"Angels"}]) => true

const myArray = [11, NaN, [], "Angels"];

const checkForFalsey = () => {
  return myArray.some((item) => !item);
};

console.log(checkForFalsey());

//Using `reduce` write a function that will return the total number of characters in an array of strings.
//eg: getTotal(["Rabbit", "Football", "Cracking"]) => 22
const randomWords = ["Rabbit", "Football", "Cracking"];

const getTotal = () => {
  totalWords = randomWords.reduce(
    (totalWords, randomWords) => totalWords + randomWords
  );
  return totalWords.length;
};

console.log(getTotal());

//Using `every` write a function that checks whether every number in an array is a square number.
//eg: checkSquares([9, 16, 81]) => true

const myNumbers = [9, 16, 81];

const checkSquares = () => {
  return myNumbers.every((number) => Math.sqrt(number) % 1 === 0);
};

console.log(checkSquares());

//Using an array method, write a function that returns the string elements of an array that have a given length or larger.
//eg: getWords(["Florida", "dog", "phone"], 5) => ["Florida", "phone"]

const words = ["Florida", "dog", "phone"];

const getWords = () => {
  return words.filter((word) => word.length >= 5);
};

console.log(getWords());

//Using an array method , write a function that converts an array to cm values as strings, into an array of numbers.
//eg: getValues(["23cm", "5.6cm", "1000cm"]) => [23, 5.6, 1000]

const cmValues = ["23cm", "5.6cm", "1000cm"];

const getValues = () => {
  return cmValues.map((value) => parseFloat(value));
};

console.log(getValues());

//Using `split` and `filter` write a function that counts the number of vowels in a sentence.
//eg: getVowelCount("In West Philadelphia born and raised") => 12

const saying = "What does the fox say?";
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const getVowelCount = () => {
  return saying.split("").filter((letter) => vowels.includes(letter)).length;
};

console.log(getVowelCount());

//Using `split, `map`, and `join` write a function that capitalizes the first letter of each word in a sentence.
//eg: capitalize ("the queens gambit") => "The Queens Gambit"

const title = "love death robots";

const capitalize = () => {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1))
    .join(" ");
};

console.log(capitalize());
