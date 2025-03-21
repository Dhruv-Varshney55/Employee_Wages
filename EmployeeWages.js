// UC1 - Check Employee Presence

const present = 1;
let empCheck = Math.floor(Math.random() * 10) % 2;

if(empCheck == present){
    console.log("Employee is Present");
}
else{
    console.log("Employee is Absent");
}