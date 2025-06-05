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


// function greet(callback , massage) {
//     console.log("hello");
//     console.log(callback);
//     massage();
//     // console.log(massage);
// }

// greet("goodbye" , () => {
//     console.log("see ou later");
// });



// in the above code "goodbye" is an argument which goes to callback thats why we use : console.log(callback); but on the other hand :  () => {
    //console.log("see ou later");
//});           this is a function which we have to call like this : massage(); or otherwise : somethis like this will print : () => {
  //console.log("see ou later");
//}





// Concise Body

// function greetings(task ) {
//     console.log("hello guys your task for today is : ");
//     // const finalTask = task();
//     // console.log(finalTask);
//     console.log(task());
// }

// greetings(() => "1. you guys will do a 2km run")



// PROMISES IN JAVASCRIPT TO COUNTER CALLBACK HELL\\\\\\\\\\\\\\\\\\\

// both are syntax for PROMISE in JS one is made with normal function and another one is with arrow function\\\\\\\\\\\

// const myPromise = new Promise((resolve, reject) => {

// });



// BASIC EXAMPLE OF PROMISE :


// const promiseOne = new Promise(function(resolve , reject){
//   setTimeout(() => {
//     console.log("async task is compleate");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function(){
//   console.log("promise consume");
// });





// SHORTER WAY TO WRITE THE SAME THING =====>>>>>>>




// new Promise (function shortPromise(resolve , reject) {
//   setTimeout(() => {
//     console.log("This is a shorter way to write promise")
//     resolve();
//   }, 1000);
// }).then(function() {
//   console.log("promise consume 2nd time");
// });





// WITH OBJECT PARAMETERS IN RESOLVE : 


// promiseThree = new Promise (function shortPromise(resolve , reject) {
//   setTimeout(() => {
//     resolve({username: "arpan" , email: "abc@gmail.com"});        //most of the times in resolve ojb is passed ,we can pass anything but most of the time obj is use as parameter.

//   }, 1000);
// });

// promiseThree.then(function(user) {
//   console.log(user);
// });




// ANOTHER EXAMPLE BUT THIS TIME A STRING PARAMETER IN RESOLVE(): 


// const foodDelivery = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("🍕 Pizza is here!");  // Step 2: Resolving after 1 second
//   }, 1000);
// });

// foodDelivery.then((message) => {
//   console.log("Delivery received:", message);
// });




// ANOTHER SAME EXAMPLE WITH OBJECT PARAMETER:


// const promiseFOur = new Promise(function(resolve , reject) {
//   setTimeout(() => {
//     resolve({name: "Arpan", email: "cj@gmail.com"})
//   }, 1000);
// })

// promiseFour.then(function(newUser){
//   console.log(newUser)
// })





// USE OF RESOLVE() AND REJECT() IN PROMISE:  


// const promiseFour = new Promise(function(resolve , reject) {
//   setTimeout(() => {
//     let Error = false;
//     if (!Error) {
//       resolve({username: "Hexagon" , passsword: "123"})
//     } else {
//       reject("ERROR: Something went wrong")
//     }
//   }, 1000);
// })

// Promise consumstion
 
// promiseFour
// .then((USER) =>{
//   console.log(USER);
//   return USER.username;
// })
// .then((Myusername) => {
//   console.log(Myusername);
// })
// .catch(function(error) {
//   console.log(error);
// })
// .finally(() =>
//   console.log("The promise has finished (either resolved or rejected)."));





// function getData(dataID) {
//   return new Promise((resolve , reject) =>{
//     setTimeout(() => {
//         console.log("data" , dataID);
//         resolve("success");
//         // reject("error")
//     }, 2000);
//   });
// }

// promise chain 


// getData(1)
// .then(() => getData(2)
// .then(() => getData(3)))            

// we're nesting .then() calls, which is unnecessary and causes confusion in promise chaining. It may work, but it defeats the purpose of a clean chain.in the above code.

// getData(1)
// .then((res) => getData(2 , ))
// .then((res) => getData(3 , ));

// correct way to use .then()

// getData(1)
// .then((res) =>{
//   console.log(res)
//   return getData(2)
// })
// .then((res) =>{
//   console.log(res)
//   return getData(3)
// })
// .then((res) => {
//   console.log(res)
// })
// .catch(() =>
//   console.log("no error")
// );



// getData(1 ,() => {
//     getData(2 ,() => {
//         getData(3);
//     })
// })






// NEW EXAMPLE :


// function newData(DATAID) {
//   return new Promise ((resolve , reject) => {
//     setTimeout(() => {
//       console.log(DATAID,  ": success")
//       resolve("resolved succssfully")
//     }, 1000);
//   });
// }

// newData(100)
// .then((res) =>{
//   console.log(res);
//   return newData(101)
// }).then((res) =>{
//   console.log(res);
// })




// USE OF ASYNC-AWAIT : 


function walkDog() {
  return new Promise((resolve , reject) =>{
    setTimeout(() => {
      
      const dogWalked = true;

      if (dogWalked) {
        resolve("you walked the dog");
      }
      else {
        reject("you DIDN'T walked the dog");
      }
    }, 1000);
  });
}

function cleanKitchen() {
  return new Promise((resolve , reject) =>{
    setTimeout(() => {
      
      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve("you have cleaned the kitchen");
      }
      else {
        reject("you DIDN'T cleaned the kitchen");
      }
    }, 1000);
  });
}

function takeOutTrash() {
  return new Promise((resolve , reject) =>{
    setTimeout(() => {
      
      const trashTakenOut = true;

      if (trashTakenOut) {
        resolve("you have taken out trash");
      }
      else {
        reject("you DID'T took out trash");
      }
    }, 1000);
  });
}


//CONSUMING PROMISE 


async function doTask(params) {

  const walkDogResult = await walkDog();
  console.log(walkDogResult);

  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);

  const takeOutTrashaResult = await takeOutTrash();
  console.log(takeOutTrashaResult);
}

doTask()


























































































































































































