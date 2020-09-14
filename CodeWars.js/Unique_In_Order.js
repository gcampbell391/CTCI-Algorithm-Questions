
/*

Implement the function unique_in_order which takes as argument a 
sequence and returns a list of items without any elements with 
the same value next to each other and preserving the original 
order of elements.

*/



var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    console.log(iterable)
    let finalArray = []
    //iterate through string or array
    for (let x = 0; x < iterable.length; x++) {
        //If this isn't the first letter continue
        if (iterable[x] !== 0) {
            //If the current char or value doesnt equal the previous one
            if (iterable[x] !== iterable[x - 1]) {
                //Push the current char or value to the final array
                finalArray.push(iterable[x])
            }
        }
    }
    //Return final array
    return finalArray
}