let numbers = [2, -5, 10, -3, 7]
const sumOfPositiveNumbers = (numbers) => {
    const positive = numbers.filter(number=> number >=0)
    return positive.reduce((prev,current)=>prev+current,0)
}
console.log(sumOfPositiveNumbers(numbers))