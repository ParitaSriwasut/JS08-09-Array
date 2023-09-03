const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];
// expexted result: 1

let result = tasks.find((el) => el.id === 2);
console.log(result);
