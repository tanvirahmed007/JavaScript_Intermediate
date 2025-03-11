//string literals

// let fullName = "John Doe";
// console.log(`Hello, Myself ${fullName}!`);

// var vs let vs const
// var is function scoped
// let and const are block scoped
// const is used for constants
// const is used for variables that are not supposed to be changed

// let x = 10;
// x=20;
// console.log(x);

// const y = 10;
// //y=20; //error
// console.log(y);

// // Arrow functions

// const add = (a,b) => {
//     return a+b;
// }

// const sub = (a,b) => {
//     a-b;
// }

// console.log(add(10,20));
// console.log(sub(10,20));

// // spread operator
// let arr1 = [1,2,3];
// console.log(arr1);
// let arr2 = [4,5,6];
// console.log(arr2);
// arr2 = [...arr1, ...arr2];
// console.log(arr2);

// // rest operator
// const sum = (...args) => {
//     let result = 0;
//     for(const arg of args){
//         result += arg;
//     }
//     return result;
// }

// console.log(sum(1,2,3,4,5));

// destructuring
// object destructuring
const person = {
    fullName: 'John Doe',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
}

const {fullName, age, address} = person;
console.log(fullName, age, address.country);

// array destructuring
const arr = [1,2,3,4,5];
const [a,b,c,d,e] = arr;
console.log(a,b,c,d,e);

// default values
const add = (a,b=10) => {
    return a+b;
}

console.log(add(10));