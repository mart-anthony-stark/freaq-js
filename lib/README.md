# Freaq

A simple statistics library for node and client side js

[Usage](https://github.com/mart-anthony-stark/freaq-js#usage)
[Methods](https://github.com/mart-anthony-stark/freaq-js#methods)

## Usage

- Install the freaq package using yarn or npm

```console
npm install freaq
```

- Initialize freaq function with a parameter of array for dataset

```javascript
const freaq = new Freaq([
  90.65, 70.65, 72.2, 82.43, 77.64, 95.84, 77.69, 74.36, 88.43, 91.17, 89.85,
  98.57, 80.73, 74.7, 82.12, 78.88, 76.5, 94.59, 92.23, 88.55, 98.48, 74.55,
  70.53, 98.23, 71.19, 72.6, 85.29, 75.99, 83.57, 82.84, 70.53,
]);
```

## Methods

- [dataset](https://github.com/mart-anthony-stark/freaq-js#methods) - returns the dataset configured during initialization
- [size](https://github.com/mart-anthony-stark/freaq-js#methods) - returns the length of the dataset
- [sort](https://github.com/mart-anthony-stark/freaq-js#methods) - returns the sorted dataset
- [summation](https://github.com/mart-anthony-stark/freaq-js#methods) - returns the sum of all of the entry in dataset
- [mean](https://github.com/mart-anthony-stark/freaq-js#methods) - returns the mean, also known as arithmetic average, is a central value of a finite set of numbers
- [median](https://github.com/mart-anthony-stark/freaq-js#methods) - returns the middle number in a sorted, ascending list of numbers and can be more descriptive of that data set than the average.
- [mode](https://github.com/mart-anthony-stark/freaq-js#methods) - returns the value that appears most often in a set of data values.
- [range](https://github.com/mart-anthony-stark/freaq-js#methods) - returns the difference between the largest and smallest values.
- [sVar](https://github.com/mart-anthony-stark/freaq-js#methods) - returns the expectation of the squared deviation of a random variable from its population mean or sample mean.
- [sDeviation](https://github.com/mart-anthony-stark/freaq-js#methods) - returns the measure of the amount of variation or dispersion of a set of values.
- [q1](https://github.com/mart-anthony-stark/freaq-js#methods) - Q1 is the median (the middle) of the lower half of the data
- [q2](https://github.com/mart-anthony-stark/freaq-js#methods) - The second quartile, Q2, is also the median
- [q3](https://github.com/mart-anthony-stark/freaq-js#methods) - returns upper quartile, or third quartile (Q3), is the value under which 75% of data points are found when arranged in increasing order
- [occurrences](https://github.com/mart-anthony-stark/freaq-js#methods) - returns an object mapped to the number of occurences of each element in dataset
- [getFrequency](https://github.com/mart-anthony-stark/freaq-js#methods) - returns how many times the specified element occur in the dataset. Returns -1 if not found.
