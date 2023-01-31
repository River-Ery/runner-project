let raceNumber = Math.floor(Math.random() * 1000);

let runnerAge = 18
let earlyRunner = true


if ((runnerAge >= 18) && (earlyRunner === true)) {
    raceNumber = raceNumber + 1000;
} else {
    (runnerAge <= 17)
    raceNumber = Math.floor(Math.random() * 1000);
}


if ((runnerAge >= 18) && (earlyRunner === true)) {
    console.log(`You will race at 9:30 AM. Your race number is ${raceNumber}.`);
} else if ((runnerAge >= 18) && (earlyRunner === false)) {
    console.log(`Late adults run at 11:00 AM. Your race number is ${raceNumber}.`);
} else {
    (runnerAge <= 17)
    console.log(`Youth registrants run at 12:30 PM. Your race number is ${raceNumber}. `)
}
