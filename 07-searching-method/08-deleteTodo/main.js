const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];
const deleteTask = tasks.filter((e) => e.id === 1);
console.log(deleteTask);
