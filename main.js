const freaq = new Freaq([
  90.65, 70.65, 72.2, 82.43, 77.64, 95.84, 77.69, 74.36, 88.43, 91.17, 89.85,
  98.57, 80.73, 74.7, 82.12, 78.88, 76.5, 94.59, 92.23, 88.55, 98.48, 74.55,
  70.53, 98.23, 71.19, 72.6, 85.29, 75.99, 83.57, 82.84,
]);

console.log({ freaq });
console.log("Dataset:", freaq.dataset);
console.log("Size:", freaq.size());
console.log("Sorted dataset:", freaq.sort());
console.log("Sum:", freaq.summation());
console.log("Mean:", freaq.mean());
console.log("Median:", freaq.median());
console.log("Mode:", freaq.mode());
console.log("Range:", freaq.range());
console.log("Variance(sample population):", freaq.sVar());
console.log("Standard deviation(sample population):", freaq.sDeviation());
console.log("Q1:", freaq.q1());
console.log("Q2:", freaq.q2());
console.log("Q3:", freaq.q3());
