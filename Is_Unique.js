



const isUnique = (str) => {
    let strArray = []

    for (let x = 0; x < str.length; x++) {
        if (strArray.includes(str[x])) {
            return false
        }
        else {
            strArray.push(str[x])
        }
    }
    return true;
};


console.log(isUnique('bab'))
console.log(isUnique('boo'))
console.log(isUnique('bo'))
console.log(isUnique('box'))
console.log(isUnique('boa'))
console.log(isUnique('baa'))
