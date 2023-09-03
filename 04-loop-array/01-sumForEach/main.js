const array = [29, 17, 13, 47, 23, 31];
let elementSum = 0;
array.forEach((sum) => {
  elementSum += sum;
});
console.log(elementSum);

/*
//for in
let sum = 0;

for(let i in array){
  sum += array[i];
}

//for of
for(let e of array){
  sum += e;
}
console.log(sum)

//for each
const arr = [2, 3, 5, 7, 11].forEach((a) => sum += a)
console.log(sum)
*/
