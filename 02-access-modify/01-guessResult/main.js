const arr = [1, 2, 4];
const newArr = arr;

arr[0] = 3;
console.log(newArr[0]); //1
//เพราะว่าarray นับค่าเริ่มจาก0
