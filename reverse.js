const str = "hello world"
let reverseWord = ""

const reverseString = (str) => {
    for (let i = str.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + str[i]
    }
    return reverseWord
}
console.log(reverseString(str))