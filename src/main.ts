const Freaq = (dataset: Array<number>) => {
  const instance = {
    dataset,
    size: (): number => instance.dataset.length,
    summation: (): number => {
      return instance.dataset.reduce((prev, current) => prev + current, 0);
    },
    sort: () => {
      return sort(instance.dataset);
    },
    mean: () => {
      return instance.summation() / instance.size();
    },
    median: () => {
      const nums = instance.sort();
      let half = Math.floor(instance.size() / 2);
      if (instance.size() % 2) return nums[half];

      return (nums[half - 1] + nums[half]) / 2.0;
    },
  };

  return instance;
};

const sort = (arr: Array<number>): Array<number> => {
  if (arr.length <= 1) return arr;

  let left = [];
  let right = [];

  let newArray = [];
  const pivot = arr.pop();
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return newArray.concat(sort(left), pivot, sort(right));
};
