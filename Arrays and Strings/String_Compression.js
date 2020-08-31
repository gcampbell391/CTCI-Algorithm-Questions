//Arrays and Strings
//1.6 One Away
//pg 91

//Implement a method to perform basic string compression using the counts of repeated characters. For example, the 
//string "aabcccccaaa" would become "a2b1c5a3". If the "compressed string" would not become smaller than the 
//original string, your method should return the original string. you can assume the string has only uppercase
//and lowercase letters. 


const stringCompression = (str) => {
    let compressedStr = "";
    let strCount = 1;

    for (let x = 0; x < str.length; x++) {
        if (str[x] === str[x + 1]) {
            strCount = strCount + 1;
        } else {
            compressedStr = compressedStr + str[x] + strCount;
            strCount = 1
        }
    }
    if (str.length < compressedStr.length) {
        return str
    }
    else {
        return compressedStr;
    }
};

console.log(stringCompression("aaabbcc"));
console.log(stringCompression("abc"));
console.log(stringCompression("abbbaaacccb"));
console.log(stringCompression("abbbbc"));
console.log(stringCompression("AAAAabbbbBBBcC"));