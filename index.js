let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistered = true;

let age = 18;

if (earlyRegistered && age > 18) {
  raceNumber += 1000;
}
if (earlyRegistered && age > 18) {
  console.log(
    `Your race will begin by 9:30am,your race number is, ${raceNumber}`
  );
} else if (!earlyRegistered && age > 18) {
  console.log(
    `Your race will begin by 11:00am,your race number is, ${raceNumber}`
  );
}


if(age < 18){
  console.log(`Your race will begin by 12:30pm, your race number is ${raceNumber}. `)
}else{
  console.log('see registration desk')
}
