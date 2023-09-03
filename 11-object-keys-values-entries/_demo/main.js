let user = { name: "John", age: 27 };
for (let key of Object.keys(user)) {
  console.log(key); // name then age
}
for (let value of Object.values(user)) {
  console.log(value); // John then 27
}
for (let pair of Object.entries(user)) {
  console.log(pair); // ['name', 'John'] then ['age', 27]
}
