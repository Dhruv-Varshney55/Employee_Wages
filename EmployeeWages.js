// UC1 (Check Employee Presence)

const present = 1;
let empCheck = Math.floor(Math.random() * 10) % 2;

if(empCheck == present){
    console.log("Employee is Present");
}
else{
    console.log("Employee is Absent");
}





// UC2 (Calculate daily employee wage)

let hours = Math.floor(Math.random() * 10) % 3;

const isPartTime = 1;
const isFullTime = 2;
const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;

switch(hours){
    case isPartTime:
        hours = partTime;
        break;
    case isFullTime:
        hours = fullTime;
        break;
    default:
        hours = 0;
}

let wage = wagePerHour * hours;
console.log("Daily wage:", wage);