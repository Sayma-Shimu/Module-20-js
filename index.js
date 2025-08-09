// inch to feet----------
// 1 feet = 12 inch

function inchToFeet(inch){
    const result = inch / 12;
    return result
}

const finalResult = inchToFeet(62);
console.log(finalResult);


// different method--------
function inchToFt(inch){
    const feet = inch / 12;
    const parseIt = parseInt(feet);
    const findInch = inch % 12;
    // const result = `${parseIt}-feet ${findInch}-inch`
    const result= parseIt + ' ft ' + findInch + ' inch'
    return result;  
    
}

const myHeight = inchToFt(75);
console.log(myHeight);


// km to mile------0.621371
function kmTomile(km){
const mile = km * 0.621371;
console.log(mile);

}

kmTomile(4)

function mileToKilometer(mile){
const kilo = mile * 1.60934;
console.log(kilo);

}

mileToKilometer(6)



