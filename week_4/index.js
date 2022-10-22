// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userAge = Number(prompt('Enter your age:'));
userAge > 18 ? `You are old enough to drive.`:` You are left with ${18 - userAge} to drive.`;

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let yourAge = Number(prompt('Enter your Age'))
let myAge = 36;

if(yourAge > myAge){
    console.log(`You are ${yourAge - myAge} older than me.`);
}else{
    console.log(`I am ${myAge - yourAge} older than you`);
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

   let a = 4;
   let b = 3;

   // using if else
   if(a > b){
     console.log(`${a} is greater than ${b}`);
   }else{
    console.log(`${a} is less than ${b}`);
   }

// ternary operator
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let nums = 2;

nums % 2 == 0
  ? console.log(`${nums} is an even number`)
  : console.log(`${nums} is an odd number`);

//   level 2
// 1. Write a code which can give grades to students according to theirs scores:
/*
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/ 

let grade = 60;

if (grade <= 100 && grade >= 89) {
  console.log(`Your grade score is A`);
} else if (grade < 89 && grade >= 70) {
  console.log(`Your grade score is B`);
} else if (grade < 70 && grade >= 60) {
  console.log(`Your grade score is  C`);
} else if (grade < 60 && grade >= 50) {
  console.log(`Your grade score is D`);
} else if (grade < 50 && grade >= 0) {
  console.log(`Your grade is F`);
} else {
  console.log(`You didn't take the test`);
}


/*

2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer

*/

let seasons = prompt("Enter the Month").toLowerCase();
seasons = seasons.charAt(0).toUpperCase() + seasons.slice(1);

switch (seasons) {
  case "September":
  case "October":
  case "November":
    console.log(`The season is Autumn`);
    break;
  case "December":
  case "January":
  case "February":
    console.log(`The season is Winter`);
    break;
  case "March":
  case "April":
  case "May":
    console.log(`The season is Spring`);
    break;
  case "June":
  case "July":
  case "August":
    console.log(`The season is Summer`);
    break;
  default:
    console.log(`Season does not exist`);
}



// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

let day = prompt("What is the day today?").toLowerCase();
day = day.charAt(0).toUpperCase() + day.slice(1);
console.log(day)


switch(day){
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
  console.log(`${day} is a working day.`);
  break;
  case 'Saturday':
  case 'Sunday':
  console.log(`${day} is a weekend.`);
  break;
  default:
  console.log(`${day} is not a recognised day`);
}

// LEVEL 3
// 1. Write a program which tells the number of days in a month.
let monthEntered = prompt("Enter a month:").toLowerCase();
monthEntered  = monthEntered.charAt(0).toUpperCase() + monthEntered.slice(1);

switch(monthEntered){
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
  console.log(`${monthEntered} has 31 days`);
  break;

  case 'April':
  case 'June':
  case 'September':
  case 'November':
  console.log(`${monthEntered} has 30 days`);
  break;

  case 'February':
  console.log(`${monthEntered} has 28 days`);
  break;

  default:
  console.log(`${monthEntered} is not a month`);
}

// 2. Write a program which tells the number of days in a month, now consider leap year.

let monthEntered2 = prompt("Enter a month:").toLowerCase();
monthEntered2 = monthEntered2.charAt(0).toUpperCase() + monthEntered2.slice(1);

switch (monthEntered2) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log(`${monthEntered2} has 31 days`);
    break;

  case "April":
  case "June":
  case "September":
  case "November":
    console.log(`${monthEntered2} has 30 days`);
    break;

  case "February":
    console.log(`${monthEntered2} has 28 or 29 days`);
    break;

  default:
    console.log(`${monthEntered2} is not a month`);
}
