// odd avg--------
function oddNum(numbers) {
    let odd = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odd.push(number);

        }
    }
    let sum = 0;
    for (const oddNumber of odd) {
        sum = sum + oddNumber;

    }

    const length = odd.length
    const avg = sum / length
    return avg;
}

const array = [12, 15, 19, 14, 17, 16, 91];
const oddAvgResult = oddNum(array);
console.log(oddAvgResult);


// even avg----------
function evenNum(num) {
    let evenArray = []
    for (const element of num) {
        // console.log(element);
        if (element % 2 === 0) {
            evenArray.push(element)
        }

    }
    // console.log(evenArray);

    let evenArraySum = 0;
    for (const element of evenArray) {
        // console.log(element);

        evenArraySum += element
        // console.log(evenArraySum);
        
    }
    const arrayLength = evenArray.length;
    const avg = evenArraySum / arrayLength;
    return avg;

}

const evenAvgResult = evenNum(array);
console.log(evenAvgResult);

