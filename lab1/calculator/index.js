/* Write a TypeScript program that implements a simple calculator. Each of
the following operations should be implemented using a function
expression: addition, subtraction, multiplication, division, and remainder.
Each function should accept at least two operands and at most three as
inputs. The program should display the results of all operations. */
console.log("it's run");
function addition(x, y, z) {
    if (z === void 0) { z = 0; }
    return x + y + z;
}
var subtraction = function (x, y, z) {
    if (z === void 0) { z = 0; }
    return x - y - z;
};
var multiplication = function (x, y, z) {
    if (z === void 0) { z = 1; }
    return x * y * z;
}; // arrow function will return this expertion
function division(x, y, z) {
    if (z === void 0) { z = 1; }
    if (y == 0 || z == 0)
        console.log("cannot divide by zero");
    else
        return x / y / z;
}
var remainder = function (x, y, z) {
    if (y == 0 || z == 0)
        console.log("cannot divide by zero");
    else if (z == undefined)
        return x % y;
    else
        return x % y % z;
};
console.log(); // print new line like cout << endl in c++
console.log();
console.log("----------------Welcom To Calculator--------------");
console.log("addition: " + addition(5, 3));
console.log("subtraction: " + subtraction(5, 3));
console.log("multiplication: " + multiplication(5, 3));
console.log("division: " + division(5, 3, 0));
console.log("remainder: " + remainder(5, 3));
console.log("addition 3 number: " + addition(5, 3, 1));
console.log("--------------------------------------------------");
