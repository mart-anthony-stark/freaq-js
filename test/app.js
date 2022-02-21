const Freaq = require("freaq");

const f = Freaq([90, 92, 93, 71, 95]);

console.log({ f });
console.log("Dataset:", f.dataset);
console.log("Size:", f.size());
console.log("Sorted dataset:", f.sort());
console.log("Dataset:", f.dataset);
console.log("Sum:", f.summation());
console.log("Mean:", f.mean());
console.log("Median:", f.median());
console.log("Mode:", f.mode());
console.log("Range:", f.range());
console.log("Variance(sample population):", f.sVar());
console.log("Standard deviation(sample population):", f.sDeviation());
console.log("Q1:", f.q1());
console.log("Q2:", f.q2());
console.log("Q3:", f.q3());
console.log("Frequency: ", f.occurrences);
console.log("Occurrence of 73.53: ", f.getFrequency(70.53));
