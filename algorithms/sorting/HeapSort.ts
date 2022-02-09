/***
 * Creates a min heap from an array - O(lg(n))
 */
const heapify = (array: number[], i: number): void => {
  let smallest = i;
  let left = 2 * i;
  let right = 2 * i + 1;

  if (left < array.length && array[left] < array[smallest]) {
    smallest = left;
  }
  if (right < array.length && array[right] < array[smallest]) {
    smallest = right;
  }
  if (smallest !== i) {
    let temp = array[smallest];
    array[smallest] = array[i];
    array[i] = temp;
    heapify(array, smallest);
  }
};

const buildHeap = (array: number[]) => {
  let mid = Math.floor(array.length / 2);
  for (let i = mid; i >= 0; i--) {
    heapify(array, i);
  }
};

const heapSort = (array: number[]) => {
  let i = 0;
  const result = [];
  while (array.length) {
    buildHeap(array);
    result.push(array[0]);
    array = array.slice(1);
  }
  return result;
};

const array = [9, 222, 51, 1, 3, 6, 7, 99];
console.log(array);
const result = heapSort(array);
console.log("Sorted: ", result);
