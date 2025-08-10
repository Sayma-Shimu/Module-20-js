function noDuplicate(array){
    const unique = [];
    for (const element of array) {
        if(unique.includes(element) === false){
            unique.push(element);
        }
    }
    return unique;
    
}

const array = ['Shimu', 'Salma', 'Sima', 'Kakoly', 'Meem', 'Muksina', 'Shimu', 'Salma', 'Sima', 'Kakoly', 'Meem', 'Muksina'];
const uniqueArray= noDuplicate(array)
console.log(uniqueArray);


function number(array){
    const newArray = [];
    for (const num of array) {
        if(newArray.includes(num) === false){
            newArray.push(num);
        }
    }
    return newArray;
}

const numbers = [20, 20, 15, 18, 91, 15, 62, 91, 18, 62];
const uniqueArr = number(numbers);
console.log(uniqueArr);

