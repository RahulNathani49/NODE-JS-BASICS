var counter = function(arr) {
    return 'THERE ARE ' + arr.length + ' ELEMENTS IN THE ARRAY';
};
var adder = function(a, b) {
    return `The sum of two number is ${a+b}`;
};
var pi = 3.14;
// EXPORTING MODULES
module.exports = {
    adder: adder,
    counter: counter,
    pi: pi
};