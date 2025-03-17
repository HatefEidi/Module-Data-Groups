function sum(elements) {
    if (elements.length === 0) return 0;
    const numbers = elements.filter(element => typeof element === 'number');
    return numbers.length ? numbers.reduce((acc, curr) => acc + curr, 0) : "No number was found in the array";
}

module.exports = sum;
