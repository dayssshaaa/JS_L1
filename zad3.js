function whatCentury(year) {
    const numYear = parseInt(year, 10);
    const century = Math.ceil(numYear / 100);
    let suffix = 'th';

    if (century % 10 === 1 && century % 100 !== 11) {
        suffix = 'st';
    } else if (century % 10 === 2 && century % 100 !== 12) {
        suffix = 'nd';
    } else if (century % 10 === 3 && century % 100 !== 13) {
        suffix = 'rd';
    }

    return `${century}${suffix}`;
}


console.log(whatCentury("1999")); // "20th"
console.log(whatCentury("2011")); // "21st"
console.log(whatCentury("2154")); // "22nd"
console.log(whatCentury("2259")); // "23rd"
console.log(whatCentury("1124")); // "12th"
console.log(whatCentury("2000")); // "20th"
