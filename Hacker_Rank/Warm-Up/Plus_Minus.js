/*
Given an array of integers, calculate the ratios of its elements that 
are positive, negative, and zero. Print the decimal value of each fraction 
on a new line with 6 places after the decimal.
*/


function plusMinus(arr) {
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0

    for (let x = 0; x < arr.length; x++) {
        if (arr[x] === 0) {
            zeroCount = zeroCount + 1
        }
        else if (arr[x] > 0) {
            positiveCount = positiveCount + 1
        }
        else if (arr[x] < 0) {
            negativeCount = negativeCount + 1
        }
    }
    console.log((positiveCount / arr.length).toFixed(6))
    console.log((negativeCount / arr.length).toFixed(6))
    console.log((zeroCount / arr.length).toFixed(6))

}