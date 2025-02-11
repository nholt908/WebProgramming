let arr = [1, 2, 5, 4, 2];
let maxNum = arr[0];

function maxValue(arr){
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > maxNum)
            maxNum = arr[i];
    }
    return maxNum;
}

console.log(maxValue(arr));