// higher order function
// function that takes a function as an argument or returns a function as a result
// const add = (a,b) => {
//     return a+b;
// }

// const sub = (a,b) => {
//     return a-b;
// }

// const mul = (a,b) => {
//     return a*b;
// }

// const div = (a,b) => {
//     return a/b;
// }

// const calculator = (num1,num2,operation) => {
//     return operation(num1,num2);
// }

// console.log(calculator(10,20,add));
// console.log(calculator(10,20,sub));

// // callback function
// // function that is passed as an argument to another function

// // synchronous callback
// const greet = (name, callback) => {
//     console.log(`Hello ${name}`);
//     callback();
// }

// const callMe = () => {
//     console.log('I am callback function');
// }

// greet('John Doe', callMe);

// // asynchronous callback
// const greetAsync = (name, callback) => {
//     console.log(`Hello ${name}`);
//     setTimeout(() => {
//         callback();
//     }, 2000);
// }

// const callMeAsync = () => {
//     console.log('I am callback function');
// }

// greetAsync('John Doe', callMeAsync);

// higher order function - forEach
const arr = [1,2,3,4,5];
arr.forEach((element) => {
    console.log(element);
});