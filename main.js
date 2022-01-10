const freaq = new Freaq([
  90.65, 70.65, 72.2, 82.43, 77.64, 95.84, 77.69, 74.36, 88.43, 91.17, 89.85,
  98.57, 80.73, 74.7, 82.12, 78.88, 76.5, 94.59, 92.23, 88.55, 98.48, 74.55,
  70.53, 98.23, 71.19, 72.6, 85.29, 75.99, 83.57, 82.84,
]);

console.log({ freaq });
console.log("Sorted", freaq.sort());
console.log("Dataset:", freaq.dataset);
console.log("size:", freaq.size());
console.log("Sum:", freaq.summation());
console.log("Mean:", freaq.mean());
console.log("Median:", freaq.median());
