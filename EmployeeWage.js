// UC 1
/*
const IS_ABSENT=0;
let a=Math.random();
console.log(a);
let b=Math.random()*10;
console.log(b);
let c=(Math.random()*10)%2
console.log(c);

let empCheck=Math.floor(math.random()*10)%2;
if
{
    console.log("Employee is Absent");
    return;
}
else
{
    console.log("Employee is Present");
}
*/

//--------------------------------------

//UC2
/*
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let empHrs=0;

empCheck=Math.floor(Math.random()*10)%3;

switch(empCheck)
{
    case IS_PART_TIME:
    empHrs=PART_TIME_HOURS;
    break;

    case IS_FULL_TIME:
    empHrs=FULL_TIME_HOURS;
   
    default:
    empHrs=0;
}
let EmpWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wage: "+EmpWage);
*/

//-------------------------------------

//UC3
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
        return PART_TIME_HOURS;

        case IS_FULL_TIME:
            return FULL_TIME_HOURS;

            default:
                return 0;
    }
}
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;

empHrs=getWorkingHours(empcheck);

let empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wage: "+empWage);

//----------------------------------

//UC 4

