function add7(x) {
    return x+7;
}

function multiply(x,y) {
    return x*y;
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function lastLetter(str) {
    return str[str.length - 1]
}

console.log(add7(19))
console.log(multiply(5,6))
console.log(capitalize("john"))
console.log(lastLetter("abcd"))