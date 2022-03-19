function reverseName(name){
    let admin = name;
    return admin
}

function resign(i){
    let n = i++ % 5
    return n
}


function replace(a,b){
    let c = a
    a = b
    b = c
    return [a,b]
}

function replace2(a,b) {
    a = a + b;
    b = a - b
    a = a - b
    return [a, b]
}

function strQuotes(str) {
    return `hello ${str}`
}

function checkTheRange(age){
    if (age >= 14 && age <= 90){
        return true ;
    }
        return false ;
}

function toFixedNumber(num,n){
    return num.toFixed(n)
}

function RoundNumber(num){
    return num.toFixed(n)
}

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}


module.exports = {
    reverseName,
    resign,
    replace,
    replace2,
    strQuotes,
    checkTheRange,
    toFixedNumber,
    ucFirst
}