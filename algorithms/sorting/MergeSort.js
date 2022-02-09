const partition = (array, left, right) => {
  if (left > right) {
    return;
  }
  let mid = Math.floor((left + right) / 2);
  partition(array, left, mid - 1);
  partition(array, mid, right);
  return merge(array, left, right);
};

const merge = (array, left, right) => {
  if (array[right] <= array[left]) {
    return [array[right], array[left]];
  } else {
    return;
  }
};
