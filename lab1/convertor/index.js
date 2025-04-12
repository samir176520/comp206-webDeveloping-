/*
Write a TypeScript program that converts a temperature from Celsius to
other units.
It should provide options to convert the temperature to Fahrenheit, Kelvin, or both.
The program should display the converted temperature(s) according to the user choice.
*/
var choice; // choice may be NULL
choice = "both"; // accept Fahrenheit(h), Kalvin(k), both
var degree = 1;
var fahr = function (degree) { return degree * (9 / 5) + 30; };
var kalvin = function (degree) { return degree + 274.15; };
switch (choice) {
    case "f":
        console.log(degree + "C in Fahrenheit = " + fahr(degree) + "F");
        break;
    case "k":
        console.log(degree + "C in Kalvin = " + kalvin(degree) + "k");
        break;
    case "both":
        console.log(degree + "C in fahrenheit = " + fahr(degree) + "F");
        console.log(degree + "C in Kalvin = " + kalvin(degree) + "k");
        break;
    default: console.log("Worng choice try again with Fahrenheit(h), Kalvin(k), both!");
}
