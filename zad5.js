function primeFactors(n) {
    const factors = {};
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor === 0) {
            factors[divisor] = (factors[divisor] || 0) + 1;
            n /= divisor;
        } else {
            divisor++;
        }
    }

    return Object.keys(factors)
        .sort((a, b) => a - b)
        .map(p => factors[p] > 1 ? `(${p}**${factors[p]})` : `(${p})`)
        .join('');
}

// Примеры использования:
console.log(primeFactors(86240)); // "(2**5)(5)(7**2)(11)"
