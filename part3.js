// // js object vs JSON
// // JSON.stringify() vs JSON.parse()
// // JSON.stringify() : js object -> JSON
// // JSON.parse() : JSON -> js object

// const person = {
//     name: 'Julia',
//     age: 20,
//     hobby: ['reading', 'listening to music']
// };

// const json = JSON.stringify(person);
// console.log(json); // {"name":"Julia","age":20,"hobby":["reading","listening to music"]}

// const obj = JSON.parse(json);
// console.log(obj); // {name: "Julia", age: 20, hobby: Array(2)}


// // local storage

// const person2 = {
//     name: 'Tanvir',
//     age: 25,
//     hobby: ['reading', 'listening to music']
// };

// localStorage.setItem('person', JSON.stringify(person2));
// console.log(JSON.parse(localStorage.getItem('person'))); // {name: "Tanvir", age: 25, hobby: Array(2)}


// // Synchrnous vs Asynchronous programming
// // synchronous : code is executed line by line
// // asynchronous : code is executed not line by line
// // Js is a single-threaded language, blocking code execution, synchronous programming

// // Synchronous programming
// console.log('1');
// console.log('2');
// console.log('3');

// // Asynchronous programming
// console.log('1');
// setTimeout(() => {
//     console.log('2');
// }, 1000);
// console.log('3');

// // promise
// // Promise is an object that represents the eventual completion or failure of an asynchronous operation
// // Promise has 3 states: pending, fulfilled, rejected
// // Promise is a constructor function, takes a function as a parameter
// // Promise has two parameters: resolve, reject
// // resolve: when the asynchronous operation is successful
// // reject: when the asynchronous operation is failed

// const promise = new Promise((resolve, reject) => {
//     console.log('doing something');
//     setTimeout(() => {
//         resolve('Tanvir');
//     }, 2000);
// }
// );  

// promise.then((value) => {
//     console.log(value);
// });

// // api calling

// fetch('https://fakestoreapi.com/products/1')
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch(error => console.log(error));

// const singleProduct = (id) => {
//     try {
//         fetch(`https://fakestoreapi.com/products/${id}`)
//         .then((response) => response.json())
//         .then((data) => console.log(data));
        
        
//     } catch (error) {
//         console.log(error);
//     }
// };

// singleProduct(1);

// // POST request

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     })
// })

// .then((response) => response.json())
// .then((data) => console.log(data))

// // put request

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     })
// })

// .then((response) => response.json())
// .then((data) => console.log(data))

// // delete request

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE'
// })

// .then((response) => response.json())
// .then((data) => console.log(data))

// // async await
// // async: function always returns a promise
// // await: waits for the promise to be resolved
// // async function always returns a promise
// // await can only be used inside an async function

// const getAllProducts = async () => {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// getAllProducts();


