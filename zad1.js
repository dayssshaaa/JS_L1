function hasTwoCubeSums(n) {
    const cubeSums = new Map();

    for (let a = 1; a * a * a < n; a++) {
        for (let b = a + 1; a * a * a + b * b * b <= n; b++) {
            const sum = a * a * a + b * b * b;
            if (sum === n) {
                if (cubeSums.has(sum)) {
                    const [c, d] = cubeSums.get(sum);
                    if (c !== a && c !== b && d !== a && d !== b) {
                        console.log(`${n} = ${a}^3 + ${b}^3 = ${c}^3 + ${d}^3`);
                        return true;
                    }
                } else {
                    cubeSums.set(sum, [a, b]);
                }
            }
        }
    }
    return false;
}

// Пример использования
const number1 = 1729;
console.log(hasTwoCubeSums(number1)); // true

const number2 = 42;
console.log(hasTwoCubeSums(number2)); // false