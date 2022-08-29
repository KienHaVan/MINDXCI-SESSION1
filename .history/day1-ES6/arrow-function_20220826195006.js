// express function, hoisting
function sum(a, b) {
    return a + b;
}
// anonymous function, no hoisting
const multi = function (a, b) {
    return a * b;
};
// arrow function
const sub = (a, b) => {};
