const words = ["cat", "dog", "bird", "car", "ax", "baby"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";

const find_embedded_word = (words, str) => {
    let hiddenWord = ""
    for (let x = 0; x < words.length; x++) {
        let encryptedphrase = str
        hiddenWord = ""
        for (let y = 0; y < words[x].length; y++) {
            if (encryptedphrase.includes(words[x][y])) {
                encryptedphrase = encryptedphrase.replace(words[x][y], "")
                hiddenWord = hiddenWord + words[x][y]
            }
            if (hiddenWord === words[x]) {
                return hiddenWord
            }
        }
    }
    return "None"
}

console.log(find_embedded_word(words, string1))
console.log(find_embedded_word(words, string2))
console.log(find_embedded_word(words, string3))
console.log(find_embedded_word(words, string4))