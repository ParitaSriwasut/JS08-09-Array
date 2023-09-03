const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

let updateTask = (id, newTask) => {
  const foundIndex = tasks.findIndex((obj, index) => obj.id == id);
  if (foundIndex != -1) {
    tasks[foundIndex].name = newTask;
  }
};
console.log(updateTask(2, "Traveling"));
