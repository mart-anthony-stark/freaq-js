const Freaq = (dataset: Array<number>) => {
  const size = (): number => instance.dataset.length;
  const mean = () => {
    return instance.summation() / instance.size();
  };
  const median = () => {
    const nums = instance.sort();
    let half = Math.floor(instance.size() / 2);
    if (instance.size() % 2) return nums[half];

    return (nums[half - 1] + nums[half]) / 2.0;
  };
  const mode = () => {
    const arr = instance.dataset;
    const mode = {};
    let max = 0,
      count = 0;

    for (let i = 0; i < arr.length; i++) {
      const item = Math.floor(arr[i]);

      if (mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }

      if (count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }

    return max;
  };
  const range = (): number =>
    instance.sort()[instance.dataset.length - 1] - instance.sort()[0];

  const sVar = (): number => {
    const m = instance.mean();
    const sum = instance.dataset.reduce((curr, n) => {
      return (curr += Math.pow(n - m, 2));
    }, 0);
    return sum / (instance.size() - 1);
  };

  const sDeviation = (): number => {
    return Math.sqrt(instance.sVar());
  };

  const instance = {
    dataset,
    size,
    summation: (): number => {
      return instance.dataset.reduce((prev, current) => prev + current, 0);
    },
    sort: () => {
      return quicksort(instance.dataset);
    },
    mean,
    median,
    mode,
    range,
    sVar,
    sDeviation,
  };

  return instance;
};

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];

  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}
