// const student = {
//     fullName : "Arpan Bhowmick",
//     marks : 94.4,
//     printMarks : function () {
//         console.log("marks =" , this.marks);
//     },
// };


// const employee = {
//     calcTax () {
//         console.log("tax rate is 10%");
//     },
//     printMarks : function () {
//         console.log("marks =" , this.marks);
//     },
// }


// const employee = {        // object 1
//     calcTax () {
//         console.log("tax rate is 10%");
//     },
// };


// const karanArjun = {       // object 2
//     salary : 50000,
// };

// karanArjun.__proto__ = employee;




// class toyotaCar {
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand) {
//         this.brand = brand;
//     }

// }

// let fortuner = new toyotaCar();
// fortuner.setBrand("fortuner");

// let lexus = new toyotaCar();
// lexus.setBrand("lexus");



// class toyotaCar{
//     constructor(brand , mileage) {
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }
// }

// let fortuner = new toyotaCar("fortuner" , 10)
// let lexus = new toyotaCar("lexus" , 10)
// console.log(fortuner)
// console.log(lexus)



// class parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class child extends parent {}
// let obj = new child();
// // console.log(obj)




// class person {
//     constructor() {
//         this.species = "homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
// }
// class engineer extends person {
//     work() {
//         console.log("can solve complex problems");
//     }
// }
// class doctor extends person {
//     work() {
//         console.log("can treate patents");
//     }
// }

// let arpanEngineer = new engineer();
// let arpanDoctor = new doctor();
// console.log(arpanEngineer);
// console.log(arpanDoctor);





// class person {
//     constructor() {
//         console.log("middle");
//         this.species = "homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
// }
// class engineer extends person {
//     constructor(branch) {
//         console.log("start");
//         super();
//         this.branch = branch
//         console.log("end")
//     }
//     work() {
//         console.log("can solve complex problems");
//     }
// }


// let arpanEngineer = new engineer("civil");
// console.log(arpanEngineer);





// class person {
//     constructor(name) {
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
// }
// class engineer extends person {
//     constructor(branch , name) {
//         super(name);
//         this.branch = branch;
//     }
//     work() {
//         console.log("can solve complex problems");
//     }
// }


// let arpanEngineer = new engineer("civil","Arpan");
// console.log(arpanEngineer);








// LET'S PRACTICE\\\\\\\\\\\\\\\\\9:12:26

class user {
    constructor(fullName , Email) {
        this.fullName = fullName;
        this.Email = Email;
    }
    
    viewData() {
        console.log("YOU HAVE NO DATA");
    }
}

class student extends user {
    constructor() {
        super(fullName , Email);
    }
    studentID(studentid) {
        this.studentid = this.studentid
    }
}

class teacher extends user {
    constructor() {
        super(fullName , Email);

    }
    employeID(employeid) {
        this.employeid = this.employeid
    }
}

let student1 = new user ("Arpan Bhowmick" , "cj@gmail.com" , 1001);
let student2 = new user ("carl" , "rj@gmail.com" , 1002);
let teacher1 = new user ("dean", "abc@gmail.com" , 200)

console.log(student1);
console.log(student2);
console.log(teacher1); 





// class Admin extends user{
//     editData() {
        
//     }
// }













































