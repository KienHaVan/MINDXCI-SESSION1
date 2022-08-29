const arr = [1, 2, 3, 4, 5];

console.log(...arr);

const sum = (...numbers) => {
    let total = 0;
    numbers.map((number) => total + number);
};
