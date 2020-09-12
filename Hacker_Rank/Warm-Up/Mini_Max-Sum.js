/*
Given five positive integers, find the minimum and maximum 
values that can be calculated by summing exactly four of the 
five integers. Then print the respective minimum and maximum 
values as a single line of two space-separated long integers.
*/


// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    //Declare Variables
    let minSum = 0
    let maxSum = 0
    let finalMessage = ""

    //.sort((a,b)=>a-b) will sort an array of integers 
    arr.sort((a, b) => a - b)
    //Grab last element from array or the max value and remove it
    let last = arr.pop()
    //Add all elements from array to find Min Sum
    for (let x = 0; x < arr.length; x++) {
        minSum = minSum + arr[x]
    }
    //Add Min Sum to final Message
    finalMessage = minSum + " "
    //Add the removed element back to the original array 
    arr.push(last)
    //Sort the elements again
    arr.sort((a, b) => a - b)
    //Remove the first element or min value
    arr.shift()
    //Add all elements from array to find Max Sum
    for (let x = 0; x < arr.length; x++) {
        maxSum = maxSum + arr[x]
    }
    //Add Max Sum to final Message
    finalMessage = finalMessage + maxSum
    //Print Final Message
    console.log(finalMessage)
}