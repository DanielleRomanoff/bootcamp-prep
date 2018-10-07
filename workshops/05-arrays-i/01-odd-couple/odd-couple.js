// YOUR CODE BELOW
function oddCouple (arr){
    let updatedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1){
            updatedArr.push(arr[i]);
        }
    }
    return updatedArr;
}
