//push pop shift
let colors  = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors);

colors.pop();
console.log(colors);


let fruits = ["apple", "banana", "cherry", "date"];
fruits.shift();
console.log(fruits);

// Given an array of numbers, return a new array with each number doubled
const numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(number => number*2);
console.log(doubleNumbers);

// Given an array of numbers, return only the even numbers
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = numbers2.filter(number => number%2===0);
console.log(evenNumbers);

// Calculate the sum of all numbers in the array
const numbers3 = [10, 20, 30, 40];
let sum = 0;
for(let i=0;i<numbers3.length;i++){
    sum = sum+numbers3[i];
}
console.log(sum);


// Find the first negative number in the array
const numbers4 = [10, 20, -3, 30, -5, 40];
let negativeNum = numbers4.find(number=>number<0);
console.log(negativeNum);

// Calculate the square root of each number and return a new array
const numbers5 = [4, 9, 16, 25];
let sqrRoot = numbers5.map(Math.sqrt);
console.log(sqrRoot);


// Filter words longer than 5 characters
const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
let longerWords = words.filter(word=>word.length>5);
console.log(longerWords);

// Check if all numbers in the array are positive
const numbers6 = [1, 2, 3, -4, 5];
if(numbers6.find(number=>number<0)){
    console.log(false);
}
else{
    console.log(true);
}


// Concatenate all strings in the array with spaces between them
const words2 = ['Hello', 'world', 'from', 'JavaScript'];
let concatedString = words2.join(' ');
console.log(concatedString);


