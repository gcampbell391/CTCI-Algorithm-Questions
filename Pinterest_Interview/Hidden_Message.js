// You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.
// Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be contiguous.

// Example:

// words = ['cat', 'dog', 'bird', 'car', 'ax', 'baby']

// string1 = 'tcabnihjs'
// find_embedded_word(words, string1) -> cat

// string2 = 'tbcanihjs'
// find_embedded_word(words, string2) -> cat

// string3 = 'baykkjl'
// find_embedded_word(words, string3) -> None

// string4 = 'bbabylkkj'
// find_embedded_word(words, string4) -> baby

// n = number of words in `words`

// m = maximal string length of each word




const words = ["cat", "dog", "bird", "car", "ax", "baby"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";

const find_embedded_word = (words, str) => {
    let hiddenWord = ""
    for (let n = 0; n < words.length; n++) {
        let encryptedphrase = str
        hiddenWord = ""
        for (let m = 0; m < words[n].length; m++) {
            if (encryptedphrase.includes(words[n][m])) {
                encryptedphrase = encryptedphrase.replace(words[n][m], "")
                hiddenWord = hiddenWord + words[n][m]
            }
            if (hiddenWord === words[n]) {
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