// console.log("one");

// setTimeout(() => {
//     console.log("two");
// }, 2000);

// console.log("three");


//  CALLBACK

// function sum(a ,b) {
//     console.log(a + b);
// }

// function calculator(a, b ,sumcallback) {
//     sumcallback(a ,b); // sumcallback is sum function
// }

// calculator(1 ,2 , sum);


// in the top code first calculator triggers where a and b is assigned 1 and 2 then the third argument is being placed( sum). As mentioned before sumcallback is sum so sumcallback(a ,b) is sum(1, 2); this triggers the sum function in the top. Giving the output 3.



// function greet(name , callback) {
//     console.log("hello " + name);
    //callback(); // this is teh parameter name 
//}

// function sayBye() {
//     console.log("goodbye");
// }

//greet("arpan" , sayBye);




//function addition(a , b) {
  //  console.log( a + b);
//}

//function calculate(a , b ,addcallback) {
    //addcallback(); // here also addcallback is a paramter name for addition . in short addcallback = addition.
//}

//addition(5 ,5);




//EXAMPLE FOR SYNCHRONOUS AND ASYNCHRONOUS PROGRAMMING IN A SINGLE CODE



// const hello = () => {
//     console.log("HELLO"); // THIS FUNCTION IS A SYNCHRONOUS CODE 
//}

// setTimeout(hello , 3000); // this is A ASYNCHRONOUS CODE









// CALLBACK HELL



// function getData(dataID) {
//     setTimeout(() => {
//         console.log("data" , dataID);
//     }, 2000);
// }


// getData(1);
// getData(2);
// getData(3);





// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     });
// });





// function greet(callback) {
//     console.log("Hello");
//     callback(); // this will call the function passed as "callback"
// }

// // Call greet, and pass in a function directly
// greet(() => {
//     console.log("Goodbye");
// });




// function doTask(task) {
//     console.log(`You have to do this task: ${task()}`);    
// }

// setTimeout(() => {
//     doTask(() => {
//     console.log("Your task is to do this project")
// })}, 2000);


// THE ABOVE CODE IS WRONG . AND THE DEFECTIVE LINE IS THE : 
// doTask(() => {
//     console.log("Your task is to do this project")
// }) IT logs to the console and doesn't return anything, it returns undefined. 
// SO WE HAVE TO USE CONCISE BODY CODE WITH NO{} AND AUTOMATIC RETURN AND IT ONY WORK WITH ONE EXPRESSION



// FIXING THE CODE:


// function doTask(task) {
//     console.log(`you guys will be given task : ${task()} `);
// }
//  doTask(() => "Your task is to do this project");

// setTimeout(() => {
//     doTask(() => "Your task is to do this project");
// }, 2000);







// function greetings(task) {
//     console.log("hello guys u will be given a task ");

//     // const finalTask = task();
//     // console.log(finalTask);

//     console.log(task())

// }

// greetings(() => "you guys will do a 2 km run");


// console.log("hello")

setTimeout(function() {
    console.log("hello");
}, 2000);














