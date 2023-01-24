//Call Apply Bind Methods

// function Animal(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   function Horse(name, age) {
//     Animal.call(this, name, age);
//     this.sound = "Neigh";
//   }
  
//   function Snake(name, age) {
//     Animal.call(this, name, age);
//     this.sound = "Hiss";
//   }
  
//   const snake1 = new Snake("Harry", 5);
//   console.log(snake1.name, snake1.age, snake1.sound);
  
//   const horse1 = new Horse("Arnold", 8);
//   console.log(horse1.name, horse1.age, horse1.sound);

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//     this.greet=function () {
//         console.log(`${this.name}`+`${this.price}`); 
//     }
// }

// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const greet=function () {
//     console.log(`${this.name}`+`${this.age}`+`${this.price}`); 
// }

// // const product1 = new Product("samsung", 5);
// // product1.greet();

// // const product2 = new Product("apple", 10);
// // product2.greet();


// const emp1=new Employee("aliabbas",90)
// const product2 = new Product("apple", 10);
// // greet.call(emp1);
// // greet.call(product2);

// //apply get array as arguments

// //Bind just create binding
// let fn=greet.bind(emp1)

// fn();





 //Another example of Call with Object

 //suppose you have
 function getEmail(){
    console.log(`${this.firstName}`+`${this.lastName}@test.com`); 
 }
 let Student={
    firstName:"aliabbas",
    lastName:"codingCops",
    age:25
 }
 let Teacher={
    firstName:"teacher",
    lastName:"shakeel",
    age:25
 }
//  getEmail.call(Teacher);
//  getEmail.call(Student);

console.log(Student.hasOwnProperty("age"))
console.log(Student);

let student=Object.create(Student)

console.log(student)



//Class example in JS
// class Animals {
//     constructor(name, specie) {
//         this.name = name;
//         this.specie = specie;
//     }
//     sing() {
//         return `${this.name} can sing`;
//     }
//     dance() {
//         return `${this.name} can dance`;
//     }
// }
// // let bingo = new Animals("Bingo", "Hairy");
// // console.log(bingo);
// class Cats extends Animals {
//     constructor(name, age, whiskerColor) {
//         super(name, age);
//         this.whiskerColor = whiskerColor;
//     }
//     whiskers() {
//         return `I have ${this.whiskerColor} whiskers`;
//     }
// }
// let clara = new Cats("Clara", 33, "indigo");
// console.log(clara);
// console.log(clara.sing());




//Reduce method Problems

const Product = [
    {
       firstName: "sam sung",
       lastName: "bob",
       price: 2300
    },
    {
       firstName: "hai er",
       lastName: "dud",
       price: 20560
    },
    {
       firstName: "Leno vop",
       lastName: "babble",
       price: 56005
    }
   ];

   const solve=Product.reduce((p,c,i,a)=>{
    //console.log(c.lastName)
    //console.log(a[i].lastName)
    const split = c.firstName.split(" ");

    console.log(split[0][0]+"  "+split[1][0]);
    return a;
   },{})
   //console.log(solve);