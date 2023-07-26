
const createPassword = () => {
    const characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 9
    let randomIndex
    let password = ""
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;:,.<>?]).{8,}$/;
    do {
        password = ""; 
        for (let i = 0; i < passwordLength; i++) {
            randomIndex = Math.floor(Math.random() * characters.length)
            password += characters[randomIndex]
        }
    } while (!password.match(passwordRegex));
    return password;
}
console.log(createPassword())