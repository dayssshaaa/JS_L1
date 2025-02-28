function wave(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            let waveWord = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            result.push(waveWord);
        }
    }
    return result;
}

// Примеры использования:
console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("mexican wave")); // ["Mexican wave", "mExican wave", "meXican wave", "mexIcan wave", "mexiCan wave", "mexicAn wave", "mexicaN wave", "mexican Wave"]
