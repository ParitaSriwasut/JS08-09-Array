//without an store into an Array
// let input = prompt + "Enter a string of numbers separated by spaces";
// let numbers = input.split(" ");
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += parseInt(numbers[i]);
// }

// alert(sum);

function sumInput() {
  let arr = [];
  let sum = 0;
  do {
    let value = prompt("Enter a number :", 0);

    if (value === " " || value === null || !isFinite(value)) {
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    } else arr.push(+value);
  } while (sum === 0);
}

alert(sumInput());
