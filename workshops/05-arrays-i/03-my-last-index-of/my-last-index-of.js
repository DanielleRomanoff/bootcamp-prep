// YOUR CODE BELOW
let count = 0;
function myLastIndexOf (arr, searchValue, index) {
    for (let i = 0; i < arr.length; i++){
      if (index === true) {
          count = index;
      }
      else if (searchValue === arr[i]) {
            count++;
      }
      else {
            count = -1;
      }
    }
    return count;
}