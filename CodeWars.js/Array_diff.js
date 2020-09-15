/*
Your goal in this kata is to implement a difference function, which subtracts
one list from another and returns the result.

It should remove all values from list a, which are present in list b.
    arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:
    arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/


function arrayDiff(a, b) {
    //Loop through array b and see if any of the elements are in array a
    for (let x = 0; x < b.length; x++) {
        if (a.includes(b[x])) {
            //If a includes b element, remove all matching elements from a 
            while (a.includes(b[x])) {
                let arrInd = a.indexOf(b[x])
                a.splice(arrInd, 1)
            }
        }
    }
    //Return a
    return a
}