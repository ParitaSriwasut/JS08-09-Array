// const array1 = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]
// let result1 = array1.map((item) => item * 2);
// console.log(array);

// const array2 = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]
// let result2 = array2.map((item) => String(item));
// console.log(result2);

// const array3 = [1, "1", 2, {}];
// // result: ["number", "string", "number", "object"]
// let result3 = array3.map((item) => typeof item);
// console.log(result3);

// const array4 = ["apple", "banana", "orange"];
// // result: ["APPLE", "BANANA", "ORANGE"]

// let result4 = array4.map((item) => item.toUpperCase());
// console.log(result4);

// const array5 = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

// let result5 = array5.map((item) => {
//   if (item % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// });
// console.log(result5);

// const array6 = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]
// let result6 = array6.map((item) => {
//   if (item < 0) {
//     return item * -1;
//   } else {
//     return item * 1;
//   }
// });
// console.log(result6);

// const array7 = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]

// let result7 = array7.map((item) => item.toFixed(2));
// console.log(result7);

// const array8 = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
// let m = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// let result8 = array8.map((month) => m[month]);
// console.log(result8);

// const array9 = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]

// let result9 = array9.map((item) => Math.sqrt(item));
// console.log(result9);

// const array10 = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// // result: ["apple", "banana", "watermelon"]

// let result10 = array10.map(function (fruitObj) {
//   //console.log(fruitObj.name);
//   return fruitObj.name;
// });
// console.log(result10);

// const array11 = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-01" },
//   { name: "watermelon", birth: "1985-12-01" },
// ];

// let result11 = array11.map(function (fruitObj) {
//   let newFruitObj = Object.assign({}, fruitObj);
//   let birthYear = +fruitObj.birth.slice(0, 4);
//   newFruitObj.age = 2021 - birthYear;
//   return newFruitObj;
// });

// console.log(result11);

let m = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const array12 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];

let result12 = array12.map(function (obj) {
  let name = obj.name;
  let day = obj.birth.search(-2);
  let month = obj.birth.slice(-5, -3) - 1;
  let year = obj.birth.slice(0, 4);
  console.log(month);
  let resultStr = `<tr><td>${name}</td><td>${day} ${m[
    month
  ].toLowerCase()}${year}</td></tr>`;
  return resultStr;
});
console.log(result12);
