var Freaq = function (dataset) {
    var instance = {
        dataset: dataset,
        size: function () { return instance.dataset.length; },
        summation: function () {
            return instance.dataset.reduce(function (prev, current) { return prev + current; }, 0);
        },
        sort: function () {
            return sort(instance.dataset);
        },
        mean: function () {
            return instance.summation() / instance.size();
        },
        median: function () {
            var nums = instance.sort();
            var half = Math.floor(instance.size() / 2);
            if (instance.size() % 2)
                return nums[half];
            return (nums[half - 1] + nums[half]) / 2.0;
        }
    };
    return instance;
};
var sort = function (arr) {
    if (arr.length <= 1)
        return arr;
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = arr.pop();
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (arr[i] <= pivot)
            left.push(arr[i]);
        else
            right.push(arr[i]);
    }
    return newArray.concat(sort(left), pivot, sort(right));
};
//# sourceMappingURL=bundle.js.map