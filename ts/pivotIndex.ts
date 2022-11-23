function calculateSum(arr: number[]) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

export default function pivotIndex(numbers: number[]) {
  let pivot: number = -1;
  for (pivot = 0; pivot < numbers.length; pivot++) {
    let leftArr = numbers.slice(0, pivot);
    let rightArr = numbers.slice(pivot);
    if (calculateSum(leftArr) === calculateSum(rightArr)) {
      return pivot;
    }
  }
  return -1;
}
