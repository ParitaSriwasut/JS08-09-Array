let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];

const initObj = {};

function reducer(acc, name) {
  // if (!acc[name]) {
  //   acc[name] = 1;
  // } else {
  //   acc[name]++;
  // }
  if (!acc[name]) acc[name] = 0;
  acc[name]++;
  return acc;
}
const r = names.reduce(reducer, initObj);
console.log(r);
