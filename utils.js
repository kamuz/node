function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function greeting(name) {
    return `Hello, ${name}`;
}

module.exports = {
    generateRandomNumber,
    greeting
};