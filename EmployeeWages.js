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





// UC3 (Calculate daily employee wage with function)

let hoursF = Math.floor(Math.random() * 10) % 3;

const isPartTimeF = 1;
const isFullTimeF = 2;
const partTimeF = 4;
const fullTimeF = 8;
const wagePerHourF = 20;

function getWorkingHours(hoursF){
    switch(hoursF){
        case isPartTime:
            return partTimeF;
        case isFullTime:
            return fullTimeF;
        default:
            return 0;
    }
}

let wageF = wagePerHourF * getWorkingHours(hoursF);
console.log("Daily wage:", wageF);





// UC4 (Calculate wages for a month)

const workingDays = 20;
let empHrs = 0;

for(let i=1; i<=workingDays; i++){
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * wagePerHourF;
console.log("Monthly Wage " + empWage + " in " + empHrs + " hrs");