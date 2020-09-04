//Sorting and Searching
//10.1 Sorted Merge 
//pg 149

//You are given two sorted arrays, A and B where, A has large enough buffer 
//at the end to hold B. Write a method to merge B into A in sorted order.

const sortMerge = (array1, array2) => {

    for (let x = 0; x < array2.length; x++) {
        array1 = [...array1, array2[x]]
        array1.sort()
    }
    return array1
}

let a1 = [1, 2, 3]
let a2 = [2, 3, 4]
let a3 = [4, 5, 6]
let a4 = [0, 4, 9]

var start = performance.now();
console.log(sortMerge(a1, a4))
var end = performance.now();

console.log('This took ' + (end - start) + 'ms to complete');

console.log(sortMerge(a1, a4))
console.log(sortMerge(a1, a2))
console.log(sortMerge(a1, a3))