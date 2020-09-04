//Arrays and Strings 
//1.3 URLify
//pg 90


//Write a method to replace all spaces in a string with '%20'. You may assume the string
//has sufficient space at the end to hold the additional characters, and that you are given 
//the "true" length of the string


const urlify = (url) => {
    let finalUrl = ""
    for (let x = 0; x < url.length; x++) {
        if (url[x] === " " && url[x + 1] === " ") {
            return finalUrl;
        }
        else if (x + 1 === url.length && url[x] === " ") {
            return finalUrl
        }
        else if (url[x] === " ") {
            finalUrl = finalUrl + "%20"
        } else {
            finalUrl = finalUrl + url[x]
        }
    }
    return finalUrl
};

console.log(urlify("Mr John Smith"));
console.log(urlify("Mr John Smith  "));
console.log(urlify("Mr John Smith "));
console.log(urlify("Mr JohnSmith "));
