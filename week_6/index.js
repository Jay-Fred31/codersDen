const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];


//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i = 0; i <= 10; i++){
    console.log(i)
}

let j = 0;
while(j <= 10){
    console.log(j)
    j++
}

let k = 0;
do{
    console.log(k);
    k++;
}while(k <= 10);


//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let m = 10; m >= 0; m--){
    console.log(m)
}

let b = 10;
while(b >=0){
    console.log(b);
    b--;
}

//3. Iterate 0 to n using for loop
let n = Math.floor(Math.random() * 10);
for(let s = 0; s <= n; s++){
    console.log(n-s);
}

//4. Write a loop that makes the following pattern using console.log():
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
 */
let stairs = '';
for(let i = 0; i <= 7; i++){
    stairs += "#";
    console.log(`${stairs}`);
    
}

// 5. Use loop to print the following pattern:
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100

*/

for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i *i}`);
}

// 6. Using loop print the following pattern
/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000

*/
for(let i = 0; i <= 10; i++){
    console.log(`${i} ${i ** 2} ${i ** 3}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for(let i = 0; i <= 100; i+=2){
 console.log(i);
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i = 0; i<=100; i++){
    if(i%2 !==0){console.log(i)}
}
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 0; i <= 19; i++) {
  let isPrime = true;
  for (let a = 2; a <= i; a++) {
    if (i % a === 0 && a !== i) {
      isPrime = false;
    }
  }
  console.log(`${i} is ${isPrime}`)
  if (isPrime === true && i > 1) {
    console.log(i);
  }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
sum = 0;
for(let i = 0; i <= 100; i++){
  sum+=i
}
  console.log(sum);

  // 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
  sumEven = 0;
  sumOdd = 0
  for(let i = 0; i <= 100; i++){
    if(i%2 == 0){
      sumEven+=i
    }else{
      sumOdd+=i
    }
    
  }
  console.log(sumOdd);
  console.log(sumEven)

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let SumOddAndEven = Array(sumEven, sumOdd);
console.log(SumOddAndEven);

// 13. Develop a small script which generate array of 5 random numbers
let fiveRandomArray = [];
fiveRandomArray[0] = Math.floor(Math.random()* 10);
fiveRandomArray[1] = Math.floor(Math.random()* 10);
fiveRandomArray[2] = Math.floor(Math.random() * 10);
fiveRandomArray[3] = Math.floor(Math.random() * 10);
fiveRandomArray[4] = Math.floor(Math.random() * 10);
fiveRandomArray[5] = Math.floor(Math.random() * 10);
console.log(fiveRandomArray);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

let funnyArray = [];
let randomNums = Math.floor(Math.random() * (25 - 10) + 10);
for(let i = 0; i < 5; i++){
  funnyArray[i] = randomNums;
  randomNums += 1;

}
console.log(funnyArray);

// 15. Develop a small script which generate a six characters random id:
// 5j2khz

let box = ['a', 5, 'c', 1, 'y', 'k', 'p', 'h', 2, 'z', 8, 'b', 's', 7, 'j'];
let randomSix = '';
for(let i = 0; i <= 5; i++){
  randomSix += box[Math.floor(Math.random() * box.length)];
}
console.log(randomSix)

// Level 2
// 1. Develop a small script which generate any number of characters random id:
//  xkqci4utda1lmbelpkm03rba
// fe3jo1gl124g

let randomAny = '';
let randomIterator = Math.ceil(Math.random()*20)
for(let i =0; i <= randomIterator; i++){
  randomAny += box[Math.floor(Math.random() * box.length)];
}
console.log(randomAny);

// 2. Write a script which generates a random hexadecimal number.
// '#ee33df'

let hexBox = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5, 'f', 6, 7, 8, 9, 0];

let hexDecimalNumber = '#';
for(let i = 0; i<= 5; i++){
  hexDecimalNumber += hexBox[Math.floor(Math.random() * hexBox.length)];
}
console.log(hexDecimalNumber);

// 3. Write a script which generates a random rgb color number.
// rgb(240,180,80)
let red = Math.ceil(Math.random()*(255 - 0 + 1)+ 0);
let green = Math.ceil(Math.random() * (255 - 0 + 1) + 0);
let blue = Math.ceil(Math.random() * (255 - 0 + 1) + 0);
console.log(`rgb(${red}, ${green}, ${blue})`);

// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let upperCaseCountries =[];
for(let i = 0; i < countries.length; i++){
  upperCaseCountries.push(countries[i].toUpperCase())
}
console.log(upperCaseCountries);


// 5. Using the above countries array, create an array for countries length'.
let newCountries = [];
for(const country of countries){
  newCountries.push(country.length);
}
console.log(newCountries);
// 6. Use the countries array to create the following array of arrays:
/*
 [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]*/
let countriesCode = []
for(country of countries){
  countriesCode.push(new Array(country, country.slice(0, 3).toUpperCase(), country.length))
}
console.log(countriesCode)

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']
let landCountries = [];
console.log(countries)
for(country of countries){
  if(country.toLowerCase().includes("land")){
    landCountries.push(country);
  }
}console.log("All these countries are without land");

console.log(landCountries)


// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
let aiCountries =[];
for(country of countries){
  if(country.endsWith('ia')){
    aiCountries.push(country);
  }
}console.log(`These are countries ends without ia.`);

console.log(aiCountries)

// 9. Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia

let biggestCountry;
for(i = 0; i <newCountries.length; i++){
  if(i === 0){
    biggestCountry = countries[i]
  }if(newCountries[i] > biggestCountry.length){
    biggestCountry = countries[i]
  }

}console.log(biggestCountry)

// 10. Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
let fiveCharCountries = [];
for(country of countries){
  if(country.length == 5){
    fiveCharCountries.push(country);
  }
}
console.log(fiveCharCountries)

// 11. Find the longest word in the webTechs array
let longestWord;
for (i = 0; i < webTechs.length; i++) {
  if (i === 0) {
    longestWord = webTechs[0];
  }if(webTechs[i].length > longestWord.length) {
    longestWord = webTechs[i];
  }
}
console.log(longestWord);

// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let newWebTechs = [];
for(webTech of webTechs){
  newWebTechs.push([webTech, webTech.length])
}
console.log(newWebTechs)

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernAcronym = '';
for(let i = 0; i < mernStack.length; i++){
  mernAcronym+=(mernStack[i][0].toUpperCase());
}

console.log(mernAcronym)

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

let programingLangs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for(lang of programingLangs){
  console.log(lang);
}

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruitArray = ["banana", "orange", "mango", "lemon"];
for (i = fruitArray.length-1; i >= 0; i--) {
  console.log(fruitArray[i]);
}

// 16. Print all the elements of array as shown below.
  const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
  ];
for(stack of fullStack){
  for(codes of stack){
    console.log(codes)
  }
}

for(let i = 0; i<fullStack.length; i++){
  for(let j = 0; j<fullStack[i].length; j++){
    console.log(fullStack[i][j].toUpperCase());
  }
  
}




