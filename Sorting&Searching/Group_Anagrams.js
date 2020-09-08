//Sorting and Searching
//10.3 Group Anagrams 
//pg 150

//Write a method to sort an array of strings so that all the anagrams are next to each other. 

const strArray1 = [
    "netb",
    "moat",
    "need",
    "toam",
    "deen",
    "atom",
    "bent"
]

const strArray2 = [
    "will",
    "rake",
    "bo",
    "fi",
    "llwi",
    "if",
    "kare",
    "liwl",
    "raek"
]

const alignAnagrams = (array) => {
    let anagramArray = array
    //Loop through array of strings
    for (let x = 0; x < array.length; x++) {
        // Loop through array to see if there is a match to current string
        for (let y = 0; y < array.length; y++) {
            let str1 = array[x]
            let str2 = array[y]
            //If the word isn't itself && has the same characters as another string
            //in the array then remove the match(y) and insert the match behind(x) 
            if (x !== y && sortString(str1) === sortString(str2)) {
                anagramArray.splice(y, 1)
                anagramArray.splice(x, 0, str2)
            }
        }
    }
    return anagramArray
}

//Helper function to sort the characters of a string
//in alphabetical order 
const sortString = (str) => {
    let arr = str.split('')
    let sorted = arr.sort()
    return sorted.join('')
}


console.log(alignAnagrams(strArray1))
console.log(alignAnagrams(strArray2))