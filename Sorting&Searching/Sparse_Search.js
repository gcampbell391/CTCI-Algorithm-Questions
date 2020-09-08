//Sorting and Searching
//10.5 Sparse Search 
//pg 150

//Given a sorted array of strings that is interspered with empty strings, write 
//a method to find the location of a given string 


const stringArray1 = [
    "at",
    "",
    "",
    "",
    "ball",
    "",
    "",
    "car",
    "",
    "",
    "dad",
    "",
    ""
]

const findStringLocation = (strArray, string) => {
    for (let x = 0; x < strArray.length; x++) {
        if (strArray[x] === string) {
            return x
        }
    }
}


console.log(findStringLocation(stringArray1, 'at')) //Output: 0
console.log(findStringLocation(stringArray1, 'dad')) //Output: 10
console.log(findStringLocation(stringArray1, "ball")) //Output: 4
console.log(findStringLocation(stringArray1, 'car')) //Output: 7