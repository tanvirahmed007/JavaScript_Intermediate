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
// const arr = [1,2,3,4,5];
// arr.forEach((element) => {
//     console.log(element);
// });

// // higher order function - map
// const arr2 = [1,2,3,4,5];
// const newArr = arr2.map((element) => {
//     return element*element;
// });
// console.log(newArr);

// const products = [
//     {name: 'laptop', price: 1000},
//     {name: 'mobile', price: 500},
//     {name: 'tv', price: 200},
//     {name: 'watch', price: 100}
// ];

// const updatedProducts = products.map((product) => {
//     if(product.price > 200) {
//         return {...product, price: product.price*2};
//     }
//     return product;
// });
// console.log(updatedProducts);

// // higher order function - filter
// const products2 = [
//     {name: 'laptop', price: 1000},
//     {name: 'mobile', price: 500},
//     {name: 'tv', price: 200},
//     {name: 'watch', price: 100}
// ];

// const filteredProducts = products2.filter((product) => {
//     return product.price > 200;
// });
// console.log(filteredProducts);

// // higher order function - reduce
// const cartProducts = [
//     {id: 1,name: 'laptop', price: 1000},
//     {id: 2,name: 'mobile', price: 500},
//     {id: 3,name: 'tv', price: 200},
//     {id: 4,name: 'watch', price: 100}
// ];

// const total = cartProducts.reduce((acc, product) => {
//     return acc + product.price;
// }, 0);
// console.log(total);

// // higher order function - some
// // returns true if at least one element satisfies the condition

// const arr3 = [1,2,3,4,5];
// const hasEvenNumber = arr3.some((element) => {
//     return element%2 === 0;
// });
// console.log(hasEvenNumber);

// // higher order function - every
// // returns true if all elements satisfy the condition

// const arr4 = [1,2,3,4,5];
// const allEvenNumbers = arr4.every((element) => {
//     return element%2 === 0;
// });
// console.log(allEvenNumbers);

// // higher order function - find
// // returns the first element that satisfies the condition

// const arr5 = [1,2,3,4,5];
// const evenNumber = arr5.find((element) => {
//     return element%2 === 0;
// });
// console.log(evenNumber);

// // higher order function - sort
// const arr6 = [1,5,3,4,2];
// arr6.sort((a,b) => {
//     return a-b; // ascending order
// });
// console.log(arr6);