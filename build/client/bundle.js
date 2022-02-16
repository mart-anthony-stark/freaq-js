var Freaq = function (dataset) {
    var size = function () { return instance.dataset.length; };
    // MEASURES OF CENTRAL TENDENCY
    var mean = function () {
        return instance.summation() / instance.size();
    };
    var median = function () {
        var nums = instance.sort();
        var half = Math.floor(instance.size() / 2);
        if (instance.size() % 2)
            return nums[half];
        return (nums[half - 1] + nums[half]) / 2.0;
    };
    var mode = function () {
        var arr = instance.dataset;
        var mode = {};
        var max = 0, count = 0;
        for (var i = 0; i < arr.length; i++) {
            var item = Math.floor(arr[i]);
            if (mode[item]) {
                mode[item]++;
            }
            else {
                mode[item] = 1;
            }
            if (count < mode[item]) {
                max = item;
                count = mode[item];
            }
        }
        return max;
    };
    var range = function () {
        return instance.sort()[instance.dataset.length - 1] - instance.sort()[0];
    };
    // Variance of SAMPLE population
    var sVar = function () {
        var m = instance.mean();
        var sum = instance.dataset.reduce(function (curr, n) {
            return (curr += Math.pow(n - m, 2));
        }, 0);
        return sum / (instance.size() - 1);
    };
    // Standard Deviation of SAMPLE population
    var sDeviation = function () {
        return Math.sqrt(instance.sVar());
    };
    // Quartiles
    var q1 = function () {
        var index = Math.floor((instance.size() + 1) / 4);
        return instance.sort()[index];
    };
    var q2 = function () {
        var index = Math.floor((instance.size() + 1) / 2);
        return instance.sort()[index];
    };
    var q3 = function () {
        var index = Math.floor((3 * instance.size()) / 4);
        return instance.sort()[index];
    };
    // Frequency of a data
    var occurrences = dataset.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    // Function to get occurances
    var getFrequency = function (data) {
        return occurrences[data] || -1;
    };
    // CLASS INSTANCE
    var instance = {
        dataset: dataset,
        size: size,
        summation: function () {
            return instance.dataset.reduce(function (prev, current) { return prev + current; }, 0);
        },
        sort: function () {
            return quicksort(instance.dataset);
        },
        mean: mean,
        median: median,
        mode: mode,
        range: range,
        sVar: sVar,
        sDeviation: sDeviation,
        q1: q1,
        q2: q2,
        q3: q3,
        occurrences: occurrences,
        getFrequency: getFrequency
    };
    return instance;
};
function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    var pivot = array[0];
    var left = [];
    var right = [];
    for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right));
}
//# sourceMappingURL=bundle.js.map