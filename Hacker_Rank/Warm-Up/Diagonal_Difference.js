
/* 
Given a square matrix, calculate the absolute difference between 
the sums of its diagonals.

*/



function diagonalDifference(arr) {
    // Write your code here
    let primaryDiagonalSum = 0
    let secondaryDiagonalSum = 0
    let count = arr.length - 1
    //Get sum for both diagonals 
    for (let x = 0; x < arr.length; x++) {
        primaryDiagonalSum = primaryDiagonalSum + arr[x][x]
        secondaryDiagonalSum = secondaryDiagonalSum + arr[count][x]
        count = count - 1
    }

    //Math.abs will return the absolute value of a value
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum)

}