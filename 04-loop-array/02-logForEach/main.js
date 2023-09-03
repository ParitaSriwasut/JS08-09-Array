const names = ["Mike", "Sid", "Jack", "Bill"];
// names.forEach((element) => {
//   for (let i = 3; i < names.length; i++) {
//     console.log(element);
//   }
// });

names.forEach((person, order) => console.log(order + 1, person));
