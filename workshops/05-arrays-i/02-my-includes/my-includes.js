// YOUR CODE BELOW
function myIncludes (arr, searchValue) {
    for (let i = 0; i < arr.length; i++) {
        if (searchValue !== arr[i]) {
            return false;
        }
        else {
            return true;
        }
    }
}
