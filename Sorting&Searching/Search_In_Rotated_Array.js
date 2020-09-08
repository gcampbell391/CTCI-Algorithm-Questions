//Sorting and Searching
//10.3 Search in Rotated Array 
//pg 150

//Given a sorted array of n integers that has been rotated an unknown number of times,
//write code to find an element in the array. You may assume that the array was originally 
//sorted in increasing order


const intArray1 = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]

const findInt = (intArray, num) => {
    for (let x = 0; x < intArray.length; x++) {
        if (intArray[x] === num) {
            return x + "(the index of " + num + " in the array)"
        }
    }
}

console.log(findInt(intArray1, 5))
console.log(findInt(intArray1, 15))
console.log(findInt(intArray1, 25))
console.log(findInt(intArray1, 10))