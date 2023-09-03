console.log("Array");
//Array declaration//
//Array literal
//element
const friends = ["Lily", "Non", "Bee", "Ten"];

//Array constructor
const height = new Array(150, 160, 170);
console.log(height);

//Access,Modify,Add,Delete
//Bracket notation with index

console.log(friends[0]); //get element by using [] with index.
console.log(friends[-1]); // we got undefined bcs there's has no index -1 inside.

//Reassign : Update
friends[0] = "Gold";
console.log(friends[0]);
friends[1] = "Nonny";
console.log(friends[1]);

//if we update the element doesn't exist. === adding more element inside Array!
// friends[-1] = "Rita";
// console.log(friends);

//Adding
console.log(friends[3]);
friends[4] = "Git";
console.log(friends);

//Delete

//only element will appear but space will be 'empty'.
delete friends[2];
console.log(friends);
console.log(friends[2]); // undefined

//Basic property and modify method of Array//
console.log(friends.length);
friends[friends.length] = "Mox"; // will put from the last element.
console.log(friends);
console.log(friends.length);

// for (let i = 0; i <= friends.length - 1; i++) {
//   //ge from 0,1,2,3,4,5 (length = 6)
//   console.log(friends[i]);
// }

for (let i = 0; i < friends.length; i++) {
  //ge from 0,1,2,3,4,5 (length = 6)
  console.log(friends[i]);
}

//Method for URUD element

const animals = ["Dog", "Cat", "Duck"];
//Array can be Immutable and Mutable value.
let r = animals.push("Monkey"); // putting from last element and mutated
console.log(animals);
console.log(r); //array.length 4

//Unshift : put new element from the front array.
let s = animals.unshift("Snake", "Spider");
console.log(animals);
console.log(s);

//Pop : Delete from the last element
let t = animals.pop();
console.log(animals);
console.log(t); //Monkey

//shipt : Delete from the front element

////////Loop with Array////////////
//for loop
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

//for in : array can be an object.
/*
key:value => index:value
const arr ={
  1: "Rita",
  2: "Non",
  3: "Ten"
}
*/
// for (let index in animals) {
//   console.log(index), animals[index];
// }
// console.log(animals);

//for of :

// for (let element of animals) {
//   console.log(element);
// }

//Higher order function

function add(x, y) {
  return x + y;
}
console.log(add(5, 6)); //11
//Function expression ; function as a value

const a = console.log;
const b = alert;
//adding a value to variable

//Create function that receving parameter function.

function addAndShow(x, y, showFn) {
  let result = x + y;
  //call show
  showFn();
  return result;
}

function show() {
  console.log("Hi");
}

addAndShow(5, 10, show); //function parameter
//when this function got calling the function will excuse.
//ส่ง1ฟังขั่นเข้าไป

//Main function
function cook(fn1, fn2, fn3) {
  // call back function
  fn1();
  fn2();
  fn3();
}
//sub function
function step1() {
  console.log("prepare");
}
function step2() {
  console.log("cook");
}
function step3() {
  console.log("serve");
}
//console.log(cook(step1, step2, step3));
//call : call/run first function after that next parameter will excuse.
//function : step1,2,3 will not run if the main function is not excuse first.

//for each  : is Higher order function / receive the value by function

const items = ["Bag", "Book", "Laptop"];
//foe each => array : for each (FN)
// items.forEach(function ()){}

// items.forEach(function (){
//   console.log("Hi");
// })
//function that for each was receiving will run by function parameter it means depends on element of function!!!!

// const iterateFn = function (items) { //name should be array name or element
//   console.log(items);
// };

// const iterateFn = (a, b, c) => console.log(a, b, c);
//Best pract!
const iterateFn = (items, index, array) => console.log(items, index, array);
// function iterate
// const items = ["Bag", "Book", "Laptop"];
items.forEach(iterateFn); // => solve parameter and log with array element.

items.iterateFn = (a, b, c) => {
  console.log(`At index ${b} in ${a}`);
  fn(`index = ${i}`);
};

//Example
function myForEach(fn) {
  for (let i = 0; i < 5; i++) fn();
}
myForEach((a) => console.log(a));

//Array method
//clone :
//.concat() = > [].concat[];
//.slice(start,end)
//[0,1,2,3,4,5].slice(0,3) => [0,1,2]
//cut from 3
//splice(start[,deleteCount,elem1,...,elemN])

//map
//array.map(call back/function)
//const arr[2,5,10]
//arr.map((items)=>items**2)

//Homework
//map
const array = [1, 2, 30, 400];
const newArr = array.map((x) => {
  return 2 * x;
});
console.log(newArr);

//indexOf

//find
//syntax => const array.find(obj => obj.price === 100)
//if cannot find value will return -1.
