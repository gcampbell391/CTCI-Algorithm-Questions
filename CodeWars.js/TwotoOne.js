/*
Take 2 strings s1 and s2 including only letters from a to z. Return a 
new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.

Ex:
    a = "xyaabbbccccdefww"
    b = "xxxxyyyyabklmopq"
    longest(a, b) -> "abcdefklmopqwxy"

    a = "abcdefghijklmnopqrstuvwxyz"
    longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/



function longest(s1, s2) {
    //Combine both s1 and s2
    let phrase = s1 + s2
    let finalArray = []
    let finalPhrase = ""

    //Make a unique array from phrase chars
    for (let x = 0; x < phrase.length; x++) {
        if (!finalArray.includes(phrase[x])) {
            finalArray.push(phrase[x])
        }
    }
    //Sort the array and add each char in the array to final phrase
    finalArray.sort()
    for (let y = 0; y < finalArray.length; y++) {
        finalPhrase = finalPhrase + finalArray[y]
    }
    //Return final phrase
    return finalPhrase
}