/*
Complete the repeatedString function in the editor below. It should 
return an integer representing the number of occurrences of a in the prefix 
of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
*/



function repeatedString(s, n) {
    let currentIndex = 0
    let currentMessage = ""
    let aCount = 0
    if (s === "a") {
        return n
    }
    for (let x = 0; x < n; x++) {
        if (currentIndex === s.length) {
            currentIndex = 0
        }
        currentMessage = currentMessage + s[currentIndex]
        currentIndex = currentIndex + 1
    }
    for (let y = 0; y < currentMessage.length; y++) {
        if (currentMessage[y] === 'a') {
            aCount = aCount + 1
        }
    }
    return aCount
}
    


}