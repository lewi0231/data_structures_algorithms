// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly
// above it as shown:

const pascalsTriangle = (numRows) => {
  const result = [];
  if (numRows > 0) {
    result.push([1]);
  }
  if (numRows > 1) {
    result.push([1, 1]);
  }
  let previous = result[result.length - 1];
  for (let j = 0; j < numRows - 2; j++) {
    const subArray = [];
    subArray.push(1);
    for (let i = 0; i < previous.length - 1; i++) {
      subArray.push(previous[i] + previous[i + 1]);
    }
    subArray.push(1);
    result.push(subArray);
    previous = subArray;
  }
  return result;
};

const recursivePascals = (numRows) => {
  if (numRows === 0){
    return [];
  }
  const result = recursivePascals(numRows - 1);
    result.m
  }



console.log(recursivePascals(6));
