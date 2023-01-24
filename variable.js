//Learn more about
//Getting know about var let and const
// function start() {
//     for (var i = 0;i < 5; i++) {
//         console.log(i)
        
//     }
//     console.log(i)
// }
// start()

//let and const block scoped and var in function scope


// const func=(name)=>{
//     return name;
// }
// const name=func("abbas");
// console.log(name)


// object Literals
const arrStu=[
 {
    firstName: "alice",
    lastName: "bob",
    age: 23
 },
 {
    firstName: "jone",
    lastName: "dude",
    age: 20
 },{
    firstName: "als",
    lastName: "babble",
    age: 56
 }
];

// const output = arrStu.reduce(function(acc,current){
//    console.log(++acc[current.age])
//    return acc+current.age;
// },{});
// console.log(output);

// const newStu=arrStu.filter((x)=>x.age<25).map((x)=>x.firstName)
// console.log(newStu)
//  //Map in array
//  const array = [2,3,4,1,6];
//  console.log(array.map(
//     function(item){
//     return item*2;
// }
// ));

// //filter out
//  const filt = [2,3,4,1,6];
//  console.log(filt.filter(
//     function(item){
//     return item%3===0;
// }
// ));



//Destructing
// const alphabet=['A','B','C','D']
// const number=['1','2','3','4']

// const [a,c, ...rest] = alphabet;
// console.log(a+" "+rest)

// const[a,b]=arrStu;
// console.log(b);
// const{firstName}=b;
// console.log(firstName);


//Rest
// function multiply(multiplier,...rest){
//     return rest.map(function(element){return multiplier*element});
// }
// const arr=multiply(3,3,4,10,2)
// console.log(arr)



//call bind apply


const obj1 = {
   key1: 'value 1.1',
   key2: null,
   key3: 'value 1.3',
   key4: ''

 };
 
 const obj2 = {
   key1: 'value 2.1',
   key2: 'value 2.2',
   key3: 'value 2.3',
   key4: 'value 2.4',
   key5: 'value 2.5'
 };
 
 // Spread the keys from both objects into an array.
 const allKeys = [ ...Object.keys(obj1), ...Object.keys(obj2) ];

 // Convert the array of keys to a set to remove duplicate values,
 // then spread the unique values into a new array.
 const uniqueKeys = [ ...new Set(allKeys) ];
 
 // Reduce the unique keys into a new object containing the value
 // for each key from obj1, falling back to the value from obj2 if
 // obj1[key] is falsey.
 const result = uniqueKeys.reduce((next, key) => {
   const value = obj1[key] || obj2[key];
   return { ...next, [key]: value };
 }, {});
 console.log(result);
 // result:
 // {
 //	 key1: 'value 1.1',
 //   key2: 'value 2.2',
 //   key3: 'value 1.3',
 //   key4: 'value 2.4',
 //   key5: 'value 2.5',
 // }

