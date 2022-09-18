const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  else {
    let half = Math.ceil(arr.length/2);
    let firstHalf = arr.slice(0,half);
    let secondHalf = arr.slice(half);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
};

const merge = (firstArr, secondArr) => {
  let sortedArr = [];

  while (firstArr.length > 0 && secondArr.length > 0) {
    if (firstArr[0] > secondArr[0]) {
      sortedArr.push(secondArr.shift());
    } else {
      sortedArr.push(firstArr.shift());
    }
  }
  return [...sortedArr, ...firstArr, ...secondArr];
};

const unsorted1 = [93, 151, 3, 20, 463, 155, 167, 34, 13];
// const unsorted2 = [-3, 0, 104, 10456, 4, 790, 90, -90];
// const unsorted3 = [10, 4.5, 3.7, 1.1, 0.3, 9.99, 8, 4, 4.7];

console.log(mergeSort(unsorted1)); //[3, 13, 20, 34, 93, 151, 155, 167, 463]
// console.log(mergeSort(unsorted2)); //[-90, -3, 0, 4, 90, 104, 790, 10456]
// console.log(mergeSort(unsorted3)); //[0.3, 1.1, 3.7, 4, 4.5, 4.7, 8, 9.99, 10]