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
console.log("Monthly Wage: " + empWage + " in " + empHrs + " hrs");





// UC5 (Calculate wages till total working hours of 160 or max days of 20 is reached for a month)

let totalDays = 0;
empHrs = 0;

while(empHrs <= 160 && totalDays < 20){    
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
    totalDays++;
}

empWage = empHrs * wagePerHour; 
console.log("Total days: " + totalDays + ", Total hours: " + empHrs + ", Wage: " + empWage);





// UC6 (Storing daily wage in an array along with total wage)

function getWage(empHrs){
    return empHrs * wagePerHour;
}

const maxWorkingHrs = 160;
const maxWorkingDays = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWages = new Array();

totalDays = 0;

while(totalEmpHrs <= maxWorkingHrs && totalDays < maxWorkingDays){
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    dailyWages.push(getWage(empHrs));
    totalDays++;
}

empWage = totalEmpHrs * wagePerHour;
console.log("Total days: " + totalDays + ", Total hours: " + totalEmpHrs + ", Wage: " + empWage);





// UC7

// UC7A (Calculate total wage using forEach method)  

let totalEmpWage = 0;

function sum(currWage){
    totalEmpWage += currWage;
}

dailyWages.forEach(sum);
console.log("Total days: " + totalDays + ", Total hours: " + totalEmpHrs + ", Wage: " + totalEmpWage);



// UC7B (Show day with daily wage)

let dayCount = 0;

function mapDayWithWage(wage){
    dayCount++;
    return " (Day: " + dayCount + ", Wage: " + wage + ")";
}

let mappedWages = dailyWages.map(mapDayWithWage);
console.log("Mapped array is =" + mappedWages);



// UC7C (Days with full wage of 160)

function fullWage(wage){
    return wage.includes("160");
}

let fullWageDays = mappedWages.filter(fullWage);
console.log("Full wage day array =" + fullWageDays);



// UC7D (Find first occurrence when full time wage was earned)

let firstOccurence = fullWageDays.find((wage) => wage.includes("160"))
console.log("First occurence =" + firstOccurence);



// UC7E (Check if every element of full time wage is truly holding full time wage)

function isFullWage(wage){
    return wage.includes("160");
}

console.log("Every element of full time wage truly holding full time wage? : " + fullWageDays.every(isFullWage));



// UC7F (Check if there is any part time wage)

function isPartWage(wage){
    return wage.includes("80");
}

console.log("Is there any part time wage in the array? : " + mappedWages.some(isPartWage));



// UC7G (Find total number of days employee worked)

function totalDaysWorked(numOfDays, wage){
    if(wage > 0){
        return numOfDays + 1;
    }
    else{
        return numOfDays;
    }
}

console.log("Total number of days employee worked are: " + dailyWages.reduce(totalDaysWorked, 0));





// UC8 (Store the day and the daily wage along with total wage in map)

dailyWages = new Array();
let dailyWageMap = new Map();

totalEmpHrs = 0;
totalDays = 0;

while(totalEmpHrs <= maxWorkingHrs && totalDays < maxWorkingDays){
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    dailyWages.push(getWage(empHrs));
    totalDays++;
    dailyWageMap.set(totalDays, getWage(empHrs));
}

console.log(dailyWageMap);
console.log("Total wage : " + Array.from(dailyWageMap.values()).reduce((totalWage, wage) => totalWage + wage, 0));





// UC9 (Arrow functions)

let dailyHrsMap = new Map();

totalDays = 0;
totalEmpHrs = 0;

while(totalEmpHrs <= maxWorkingHrs && totalDays < maxWorkingDays){
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    totalDays++;
    dailyHrsMap.set(totalDays, empHrs);
}

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(dailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = Array.from(dailyWageMap.values()).reduce(findTotal, 0);

console.log("Total hours: " + totalHours);
console.log("Total wage: " + totalSalary);

let fullWorkingDays = new Array();
let partWorkingDays = new Array();
let nonWorkingDays = new Array();

dailyHrsMap.forEach((value, key) => {
    if(value == 8){
        fullWorkingDays.push(key);
    }
    else if(value == 4){
        partWorkingDays.push(key);
    }
    else{
        nonWorkingDays.push(key);
    }
})

console.log("Full working days are : " + fullWorkingDays);
console.log("Part working days are : " + partWorkingDays);
console.log("Non working days are : " + nonWorkingDays);