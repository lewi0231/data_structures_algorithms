/***
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 */

var firstUniqChar = function (s: string) {
  let array: number[] = new Array(26);
  let smallest = s.length - 1;

  for (let i = s.length - 1; i >= 0; i--) {
    let hash = s.charCodeAt(i) - "a".charCodeAt(0);
    array[hash] = (array[hash] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    let hash = s.charCodeAt(i) - "a".charCodeAt(0);
    if (array[hash] && array[hash] === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar("bubble"));
