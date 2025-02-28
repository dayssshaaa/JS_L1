function toWeirdCase(str) {
    return str.split(' ').map(word => 
        word.split('').map((char, index) => 
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join('')
    ).join(' ');
}

// Примеры использования:
console.log(toWeirdCase("String")); // "StRiNg"
console.log(toWeirdCase("Weird string case")); // "WeIrD StRiNg CaSe"
