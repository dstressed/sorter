class Sorter {
    constructor() {
        this._arr = [];
        this._func = function (a, b) {
            return a - b;
        };
    }

    add(element) {
        this._arr.push(element);
    }

    at(index) {
        return this._arr[index];
    }

    get length() {
        return this._arr.length;
    }

    toArray() {
        return this._arr;
    }

    sort(indices) {
        indices.sort(function (a, b) {
            return a - b;
        });
        var arr = [];
        for (var i = 0; i < indices.length; i++) {
            arr.push(this._arr[indices[i]]);
        }
        arr.sort(this._func);
        for (i = 0; i < arr.length; i++) {
            this._arr[indices[i]] = arr[i];
        }
    }

    setComparator(compareFunction) {
        if (compareFunction) this._func = compareFunction;
    }
}

module.exports = Sorter;
