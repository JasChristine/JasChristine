let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegister = false;
const age = 22;

if (earlyRegister && age > 18) {
  raceNumber += 1000;
}
if (earlyRegister && age > 18) {
  console.log(`${raceNumber} will race at 9:30AM`);
} else if (!earlyRegister && age > 18) {
  console.log(`${raceNumber} will race at 11:00AM`);
} else if (age < 18) {
  console.log(`${raceNumber} youth will race at 12:30PM`);
} else if (age === 18) {
  console.log("Please visit the registration desk!");
}
