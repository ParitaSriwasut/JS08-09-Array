const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

let obj = persons.reduce(
  function (p, c, i) {
    p[c.sex].push(c);
    return p;
  },
  { M: [], F: [] }
);

console.log(obj);
