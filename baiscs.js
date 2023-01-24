// alert("hello")

// console.log("interestRate")

// let interestRate =null; 
// console.log(interestRate)

// let name="alice";
// let age=20;

// console.log(name)
// console.log(age)


//For cleaning code We use objects of multiple properties of person
// Javascript Objects
let Person ={
    name:"ali",
    age:20
}
//Dot Notation
console.log(Person.name)
//Brackets Notation
Person['age']=90
console.log(Person.age)

//Array And Looping through array elements
let selectedColors=['red','green','blue','purple'];
for (let index = 0; index < selectedColors.length; index++) {
    const element = selectedColors[index];
    console.log(element)
}
console.log(selectedColors.length)


//Functions
function random(){

    console.log("HELLO")
}
random()