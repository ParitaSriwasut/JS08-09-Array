// const arr = [2, 3, 5, 7, 11];
// function squareArr(arr) {
//   arr.forEach((arr) => {
//     console.log(arr ** 2);
//   });
// }
// squareArr(arr);

const arr = [2, 3, 5, 7, 11];
function squareArr() {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    newArr.push(arr[i] ** 2);
  }
  return newArr;
}
let newArray = squareArr();
console.log(newArray);
console.log(arr);
