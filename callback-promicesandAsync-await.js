// DATA = "special data"

// class user {
//     constructor(fullName , Email) {
//         this.fullName = fullName;
//         this.Email = Email;
//     }
//     viewData() {
//         console.log("Your DATA =", DATA);
//     }
// }

// class Admin extends user {
//     constructor(fullName , Email) {
//         super(fullName , Email)
//     }
//     editData() {
//         DATA = "edit ur addresss";
//     }
// }

// let student1 = new user ("Arpan bhowmick", "abc@gmail.com");
// let teacher = new user ("dean" ,"cj@gmail.com");

// let ADMIN = new Admin ("ADMIN" , "ADMIN@gmail,com");

// console.log(student1);
// console.log(teacher);
// console.log(ADMIN);



// setTimeout function in JS

// setTimeout(() => {
//     console.log("hello");
// },5000);


// console.log("game start");

// setTimeout(() => {
//     console.log("enemies ahead");
// },3000);

// console.log("game ends");



// CALLBACKS

// function sum(a , b) {
//     console.log(a + b);
// }

// function calculator ( a , b , sumcallback) { 
//     sumcallback(a , b);
// }

// calculator(1 , 2 ,sum)



// CALLBACK FUNCTION WITH SQUARE CALCULATING FUNCTION




// function greet(name , callback) {
//     console.log("hello " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Bye!");
// }

// greet("Alex",  sayBye);






// const hello = () => {
//     console.log("hello");
// }

// setTimeout(() => {
//     hello();
// }, 3000);


// setTimeout(hello , 3000);




// CALLBACK HELL ADN HOW TO FIX IT 

// function getData(dataID , getNextData) {
//     setTimeout(() => {
//         console.log("data" , dataID);
//         if (getNextData){
//         getNextData();
//         }
//     }, 2000);
// }

// getData(1 ,() => {
//     getData(2 ,() => {
//         getData(3);
//     })
// })


// getData(1);
// getData(2);
// getData(3);




// EXPERIMENT


function greet(callback , massage) {
    console.log("hello");
    console.log(callback);
    massage();
}

greet("goodbye" , () => {
    console.log("see ou later");
});
































