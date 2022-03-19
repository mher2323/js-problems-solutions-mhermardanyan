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
module.exports = {
    reverseName,
    resign,
    replace,
    replace2
}