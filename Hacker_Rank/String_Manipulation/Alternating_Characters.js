
/*
You are given a string containing characters A and B only. 
Your task is to change it into a string such that there are no 
matching adjacent characters. To do this, you are allowed to 
delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

*/



// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    let deleteCount = 0

    for (let x = 0; x < s.length; x++) {
        if (s[x] === s[x + 1]) {
            deleteCount = deleteCount + 1
        }
    }
    return deleteCount

}