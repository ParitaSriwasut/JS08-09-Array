let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, jo, jin];

let getAverageAge = (arr) => {
  let result = arr.reduce((prev, current) => {
    //console.log("current:", current.name);
    console.log("prev:", prev);
    return current.age + prev;
  }, 0);
  console.log("result", result);
  let avg = result / 3;
  console.log(avg);
};
console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
/*
function getAverageAge(arr){
  const sumAge = array.reduce((a,c)=> a+c.age,0)
  return sumAge/array.length;
}
const result = getAverageAge(arr);
*/
