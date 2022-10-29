// Level 1

import { countries } from "./countries";
import { webTechs } from "./web_techs";

// 1. Declare an empty array;
let emptyArray = [];

// 2. Declare an array with more than 5 number of elements
let fiveNumArray = [3, 12, 99, 37, 7];

// 3. Find the length of your array
let lengthOfArray_1 = fiveNumArray.length;
console.log(lengthOfArray_1);

// 4. Get the first item, the middle item and the last item of the array
let firstItem_1 = fiveNumArray[0];
console.log(firstItem_1);

let middleItem_1 = fiveNumArray[Math.floor(lengthOfArray_1/2)];
console.log(middleItem_1);

let lastItem_1 = fiveNumArray[lengthOfArray_1-1];
console.log(lastItem_1);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5.
let mixedDataTypes = ['Bananas', 6, false, [3, 9], {bestFood: 'Yam'}, true, 'Pineapple'];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);
 
// 8. Print the number of companies in the array.
let lenOfItCompanies = itCompanies.length;

// 9. Print the first company, middle and last company
let firstCompany = itCompanies[0];
console.log(firstCompany);

let middleCompany = itCompanies[Math.floor(lenOfItCompanies/2)];
console.log(middleCompany);

let lastCompany = itCompanies[lenOfItCompanies-1];
console.log(lastCompany);

// 10. Print out each company
for(let i = 0; i < lenOfItCompanies; i++){
    console.log(itCompanies[i]);
}

// 11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < lenOfItCompanies; i++) {
  console.log(itCompanies[i].toUpperCase());
}
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let newItComapnies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let lengthOfNewItCompanies = newItComapnies.length;
newItComapnies.splice(lengthOfNewItCompanies - 2, 2, "Oracle and Amazon");
console.log(`${newItComapnies.join(", ")} are big IT companies`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.includes('Netflix')){
    console.log(itCompanies)
}else{
    console.log('Netflix is not found')
}

// 14. Filter out companies which have more than one 'o' without the filter method
let pattern = /o/gi;
let doubleOArray = [];
for(const company of itCompanies){
    let checkDoubleOArray = company.match(pattern);
    if(checkDoubleOArray != null && checkDoubleOArray.length>1)
        doubleOArray.push(company);
    }
console.log(doubleOArray);
    
// 15. Sort the array using sort() method
let sortedArray = doubleOArray.sort();
console.log(sortedArray);

// 16. Reverse the array using reverse() method
let reversedArray = doubleOArray.reverse();
console.log(reversedArray);

// 17. Slice out the first 3 companies from the array
let slicedArray = doubleOArray.slice(0, 3);
console.log(slicedArray)

// 18. Slice out the last 3 companies from the array
let last3SlicedArray = doubleOArray.slice();
console.log(last3SlicedArray);

// 19. Slice out the middle IT company or companies from the array
let slicedMiddleCompany = doubleOArray.slice(Math.floor(doubleOArray.length / 2), 2);
console.log(slicedMiddleCompany);

// 20. Remove the first IT company from the array
console.log(doubleOArray)
let firstCompanyRemoved = doubleOArray.shift();
console.log(firstCompanyRemoved);

// 21. Remove the middle IT company or companies from the array
console.log(doubleOArray)
let middleCompanyRemoved = doubleOArray.splice(0, 1);
console.log(middleCompanyRemoved);

// 22. Remove the last IT company from the array
console.log(doubleOArray);
let lastCompanyRemoved = doubleOArray.pop();
console.log(lastCompanyRemoved);

// 23. Remove all IT companies
console.log(doubleOArray);


// Exercise Level 2

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file


// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let pattern2 = /[^a-z ]/gi
let words = text.replaceAll(pattern2, '').split(' ');
console.log(words)
console.log(words.length);


// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
}
console.log(shoppingCart)
// add Sugar at the end of you shopping cart if it has not been already added

if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
}
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
let indexOfHoney = shoppingCart.indexOf('Honey');
console.log(indexOfHoney);
shoppingCart.splice(indexOfHoney, 1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
let indexOfTea = shoppingCart.indexOf('Tea');
console.log(indexOfTea);
shoppingCart.splice(indexOfTea, 1, 'Green Tea');
console.log(shoppingCart)

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let indexofEthiopia = countries.indexOf("Ethiopia");
if(countries.includes('Ethiopia')){
    console.log(countries[indexofEthiopia].toUpperCase());
}else{
    countries.push("Ethiopia");
}

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

let indexOfSass = webTechs.indexOf('Sass');
if(indexOfSass != -1){
    console.log(`Sass is a CSS preprocess`)
}else{
    webTechs.push('Sass');
    console.log(webTechs);
}

// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercise 3

// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
let sortedAges = ages.sort();
console.log(sortedAges);
let maxAge = sortedAges.reduce((a, b) => Math.max(a, b), 0)
console.log(maxAge);

let minAge = Math.min(...sortedAges);
console.log(minAge)

// Find the median age(one middle item or two middle items divided by two)
let lengthOfAges = sortedAges.length;
console.log(lengthOfAges);
let median;
if(lengthOfAges % 2 == 0){
    median = sortedAges[Math.floor(lengthOfAges/2-1)] + sortedAges[Math.floor(lengthOfAges/2)];

}else{
    median = sortedAges[Math.floor(lengthOfAges/2)]
}
console.log(median);
// Find the average age(all items divided by number of items)
let sumOfAge = ages.reduce((a, b) => (a +b), 0);
let averageAge = sumOfAge/lengthOfAges;
console.log(averageAge);

// Find the range of the ages(max minus min)

let rangeOfAges = maxAge - minAge;
console.log(rangeOfAges);

// Compare the value of (min - average) and (max - average), use abs() method
let value1 = Math.abs(minAge - averageAge);
let value2 = Math.abs(maxAge - averageAge);

console.log(value1, value2);

// 1. Slice the first ten countries from the countries array
const countries2 = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

let first10Countries = countries2.slice(0, 10);
console.log(first10Countries);

// 2. Find the middle country(ies) in the countries array
let lengthOfCountries2 = countries2.length;
console.log(lengthOfCountries2)
let middleLength = Math.ceil(lengthOfCountries2 / 2);
console.log(countries2.slice(middleLength-1, middleLength+1));


// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalf;
let secondHalf;
if(countries2 % 2 == 0){
    firstHalf = countries2.slice(0, lengthOfCountries2/2);
    secondHalf = countries2.slice(lengthOfCountries2/2);
    
}else{
    firstHalf = countries2.slice(0, middleLength);
    secondHalf = countries2.slice(middleLength);
}

console.log(firstHalf, secondHalf);
