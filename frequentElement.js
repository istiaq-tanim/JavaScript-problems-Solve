const array = [3, 5, 2, 5, 3, 3, 1, 4, 5]
const frequentElement = (array) => {
    let maxCount = 0;
    let mostFrequent;
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j])
                count++;
        }
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = array[i];
        }
    }
    return mostFrequent;
}
console.log(frequentElement(array))