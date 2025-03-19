/*
Write a TypeScript program to find the factors of a given number using an
arrow function.
Display the factors in a single line separated by a hyphen Also,
display a message indicating the total number of factors.*/
var num = 12; // here you enter number 
var facts = []; //global variable
var factors = function (num) {
    for (var i = 1; i <= num; i++)
        if (num % i == 0)
            facts.push(i); // push() methd add at the end
};
factors(num); // don't forget to call
console.log("Factors of ".concat(num, ": ").concat(facts.join("-"))); // Template literals allow you to embed variables and expressions directly inside the string using ${}.
