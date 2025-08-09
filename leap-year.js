function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }
}

const result = isLeapYear(2025);
console.log(result);



function isLeapYear(year){
    if(year % 100 !==0 && year % 4 ===0){
        return true;
    }
    else if(year % 100 ===0 && year % 400){
        return true;

    }
    else{
        return false;
    }
}

const isLipi = isLeapYear(2024);
console.log(isLipi);
