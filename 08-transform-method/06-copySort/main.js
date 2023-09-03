// let arr = ["React", "Vue", "Angular"];
// //let sorted = copySorted(arr);
// function sortCopy(arr) {
//   return arr.slice(0).sort();
// }
// arr.sort();
// console.log(sortCopy(arr)); // Angular, React, Vue
// console.log(arr); // React, Vue, Angular (no changes)

let arr = ["React", "Vue", "Angular"];
let sorted = [...arr].sort();

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
