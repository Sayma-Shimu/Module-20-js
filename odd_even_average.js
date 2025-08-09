// odd avg--------
function oddNum(numbers){
    let odd = [];
    for (const number of numbers) {
        if(number % 2 === 1){
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

