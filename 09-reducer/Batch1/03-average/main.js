const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
]; // 89

// const totalSum = scores.reduce((a, c) => a + c.score * c.weight, 0);
// console.log(totalSum / 1);

const initial = { sum: 0, total: 0 };
const sumObj = scores.reduce((acc, cur) => {
  acc.sum += cur.score * cur.weight;
  acc.total += cur.weight;
  return acc;
}, initial);

console.log(sumObj);
console.log(sumObj.sum / sumObj.total);
