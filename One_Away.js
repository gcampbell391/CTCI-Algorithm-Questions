//Arrays and Strings 
//1.5 One Away
//pg 91

//There are three types of edits that can be peformed on strings. Insert a character, 
//remove a character, or replace a character. Given two strings, write a function to check if 
//they are one edit(or zero edits) away

const checkStrings = (strOne, strTwo) => {
    let counter = 0;
    let errorCount = 0;

    if (strOne === strTwo) {
        return true;
    }
    if (strOne.length < strTwo.length) {
        while (counter < strTwo.length) {
            if (strTwo[counter] !== strOne[counter]) {
                errorCount++;
                if (errorCount >= 2) {
                    return false;
                }
            }
            counter++;
        }
    }
    while (counter < strOne.length) {
        if (strOne[counter] !== strTwo[counter]) {
            errorCount++;
            if (errorCount >= 2) {
                return false;
            }
        }
        counter++;
    }
    return true;
};
var start = performance.now();
checkStrings("bale", "bale")
var end = performance.now();

console.log('This took ' + (end - start) + 'ms to complete');
console.log(checkStrings("bale", "bale"));
console.log(checkStrings("bale", "pale"));
console.log(checkStrings("bales", "bale"));
console.log(checkStrings("bakes", "bale"));
console.log(checkStrings("bakes", "balesssss"));