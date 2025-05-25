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




function doTask(task) {
    console.log(`You have to do this task: ${task()}`);    
}

setTimeout(() => {
    doTask(() => {
    console.log("Your task is to do this project")
})}, 2000);

























