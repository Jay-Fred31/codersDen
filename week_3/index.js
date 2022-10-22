// Exercise level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Joyce";
let lastName = "Fred";
let country = "Nigeria";
let city = "Lagos";
let age = 16;
let isMarried = true;
let year = 1782;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
console.log(typeof "10" == typeof 10);

// 3. Check if parseInt('9.8') is equal to 10

console.log(parseInt("9.8") == 10);

/* 4.
Boolean value is either true or false.

i. Write three JavaScript statement which provide truthy value.
ii. Write three JavaScript statement which provide falsy value.
*/

console.log(firstName);
console.log(typeof "dog" == typeof "insect");
console.log(20);

let party;
console.log(NaN == NaN);
console.log(0);
console.log(party);

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3  true
console.log(4 > 3);
// 4 >= 3 true
console.log(4 >= 3);
// 4 < 3 false
console.log(4 < 3);
// 4 <= 3 false
console.log(4 <= 3);
// 4 == 4 true
console.log(4 == 4);
// 4 === 4 true
console.log(4 === 4);
// 4 != 4 false
console.log(4 != 4);
// 4 !== 4 false
console.log(4 !== 4);
// 4 != '4' false
console.log(4 != "4");
// 4 == '4' true
console.log(4 == "4");
// 4 === '4' false
console.log(4 === "4");
// Find the length of python and jargon and make a falsy comparison statement.
let lang1 = "python";
let lengthOfPython = lang1.length;

let lang2 = "jargon";
let lengthOfJargon = lang2.length;
console.log(lengthOfJargon != lengthOfPython);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 true
console.log(4 > 3 && 10 < 12);
// 4 > 3 && 10 > 12 false
console.log(4 > 3 && 10 > 12);
// 4 > 3 || 10 < 12 true
console.log(4 > 3 || 10 < 12);
// 4 > 3 || 10 > 12 true
console.log(4 > 3 || 10 > 12);
// !(4 > 3) false
console.log(!(4 > 3));
// !(4 < 3) true
console.log(!(4 < 3));
// !(false) true
console.log(!false);
// !(4 > 3 && 10 < 12) false
console.log(!(4 > 3 && 10 < 12));
// !(4 > 3 && 10 > 12) true
console.log(!(4 > 3 && 10 > 12));
// !(4 === '4')  true
console.log(!(4 === "4"));
// There is no 'on' in both dragon and python--false
let pet1 = 'dragon';
let pet2 = 'python';
console.log(!(pet1.includes('on') && pet2.includes('on')));

// 7. Use the Date object to do the following activities
const today = new Date();
console.log(today);
// What is the year today?
let yearToday = today.getFullYear();
console.log(yearToday);

// What is the month today as a number?
let monthToday = today.getMonth();
console.log(monthToday);

// What is the date today?
let dateToday = today.getDate();
console.log(dateToday);

// What is the day today as a number?
let dayToday = today.getDay();
console.log(dayToday);
// What is the hours now?
let hour = today.getHours();
console.log(hour);

// What is the minutes now?
let minutes = today.getMinutes();
console.log(minutes);
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

console.log(Date.now());

// Exercises: Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = Number(prompt('Please enter base'));
let height = Number(prompt('Please enter height'));
let area = 0.5 * base * height
console.log(`The area of the Triange is ${area}`);


// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let sideA = Number(prompt('Please enter  a'));
let sideB = Number(prompt('Please enter b'));
let sideC = Number(prompt('Please enter  c'));
let perimeter = sideA + sideB + sideC;
console.log(`The perimeter of the triangle is ${perimeter}`)


// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = Number(prompt('Please enter length', 'length goes here'));
let width = Number(prompt('Please enter width', 'width goes here'));

let areaOfRectangle = length * width;
let perimeter2 = 2 * (length + width);

console.log(`The Area of the triangle is ${areaOfRectangle} and the perimeter is ${perimeter2}`);


// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


const pi = 3.14;
let radius = Number(prompt('Please enter radius'));
let areaOfCircle = pi * radius * radius;
let circumferenceOfCircle = 2 * pi * radius;
console.log(`The area of the circle is ${areaOfCircle} and the circumference of the circle is ${circumferenceOfCircle}`);


// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// y = mx + b, where m => slope.
let m = 2;


// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let x2 = 6;
let y1 = 2;
let y2 = 10;
let m2 = (y2 -y1)/(x2 -x1);
m2 = (10 - 2) / (6 - 2);
console.log(m2);

// 7. Compare the slope of above two questions.
console.log(m1 === m2);

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let valueEntered = prompt('please enter x');
let x = Number(valueEntered);

let y = (x**2) + 6 * x + 9;
console.log(y);


// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hoursWorked = prompt('Please enter the hours worked');
 let ratePerHour = prompt('Please enter the rate per Hour');
 let pay = hoursWorked * ratePerHour;
 console.log(`Your weekly earning is ${pay}`)
 

// 10.  If the length of your name is greater than 7 say, your name is long else say your name is short.

let myName = "Joyce";
console.log(myName.length > 7 ? "My name is long" : "My name is short");

// 11. Compare your first name length and your family name length and you should get this output.

let firstName1 = "Asabeneh";
let lastName2 = "Yetayeh";

let lengthOfFirstname = firstName1.length;
let lengthOfLastname = lastName2.length;

console.log(
  firstName1 > lastName2
    ? `Your first name, ${firstName1} is longer than your family name, ${lastName2}`
    : `Your first name, ${firstName1} is not longer than your family name, ${lastName2}`
);

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250;
let yourAge = 25;

console.log(`I am ${myAge - yourAge} years older than you.`);

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let now = new Date();
console.log(now);
let yearBorn = prompt("Please enter your birth year in this format 'YYYY'");

let aboveOrBelow18 = now.getFullYear() - yearBorn;

console.log(
  aboveOrBelow18 >= 18
    ? `Huray! You are allowed to drive.`
    : `Sorry! You have to wait ${
        18 - aboveOrBelow18
      } more years before you can drive.`
);


// 14. 
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let numberOfYears = Number(prompt('Enter number of years'));
let yearsInSeconds = numberOfYears * 60 * 60 * 24 * 365;
console.log(`You lived ${yearsInSeconds} seconds.`);


// 15.Create a human readable time format using the Date time object

let dateNow = new Date();
let dateYear = dateNow.getFullYear();
let dateMonth = dateNow.getMonth() +1;
let dateDay = dateNow.getDate();
let hoursToday = dateNow.getHours();
let minutesToday = dateNow.getHours();

// YYYY-MM-DD HH:mm
console.log(`${dateYear}-${dateMonth}-${dateDay} ${hoursToday}:${minutesToday}`);
// DD-MM-YYYY HH:mm
console.log(
  ` ${dateDay}-${dateMonth}-${dateYear} ${hoursToday}:${minutesToday}`
);
// DD/MM/YYYY HH:mm
console.log(
  ` ${dateDay}/${dateMonth}/${dateYear} ${hoursToday}:${minutesToday}`
);


// 16. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
console.log(
  `${dateYear}-${dateMonth}-${dateDay} ${"00" +hoursToday.split(2)}:${"00" +minutesToday.split(2)}`
);