function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function min(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            let temp = arr[indexMin];
            arr[indexMin] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i <= arr.length - 1; i++) {
        let key = arr[i];
        let j = i - 1;
        while (i >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    if (left.length) {
        result.push(...left);
    } else {
        result.push(...right);
    }
    return result;

    //return [...result,...left,...right];
}

module.exports = { bubbleSort, selectionSort, insertionSort, mergeSort, merge };