//Arrays and Strings 
//1.2 Check Permutation
//pg 90


//Given two strings, write a method to decide if one is a permutation 
//of the other

const checkStrings = (strOne, strTwo) => {
    let strOneArray = [];
    let strTwoArray = [];

    if (strOne.length !== strTwo.length) {
        return false;
    }

    for (let i = 0; i < strOne.length; i++) {
        strOneArray.push(strOne[i]);
    }

    for (let i = 0; i < strTwo.length; i++) {
        strTwoArray.push(strTwo[i]);
    }
    strOneArray.sort();
    strTwoArray.sort();
    for (let i = 0; i < strOneArray.length; i++) {
        if (strOneArray[i] !== strTwoArray[i]) {
            return false;
        }
    }

    return true;
};
// var start = performance.now();
// console.log(checkStrings("abcd", "dcba"));
// var end = performance.now();

// console.log('This took ' + (end - start) + 'ms to complete');
console.log(checkStrings("abcd", "dcba"));
console.log(checkStrings("abcd", "acbd"));
console.log(checkStrings("abcd", "jhgj"));
console.log(checkStrings("abcd", "apce"));
console.log(checkStrings("abcd", "bcad"));
console.log(checkStrings("abcde", "bcad"));
console.log(checkStrings("racecar", "carrace"));
