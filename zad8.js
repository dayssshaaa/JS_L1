function expandedForm(num) {
    return num
        .toString()
        .split('')
        .reverse()
        .map((digit, index) => digit * Math.pow(10, index))
        .filter(val => val > 0)
        .reverse()
        .join(' + ');
}

// Примеры использования:
console.log(expandedForm(12));    // "10 + 2"
console.log(expandedForm(45));    // "40 + 5"
console.log(expandedForm(70304)); // "70000 + 300 + 4"
