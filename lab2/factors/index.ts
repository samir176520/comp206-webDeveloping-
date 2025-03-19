/*
Write a TypeScript program to find the factors of a given number using an
arrow function. 
Display the factors in a single line separated by a hyphen Also, 
display a message indicating the total number of factors.*/

let num:number = 12 // here you enter number 

let facts: number[] = [] //global variable

const factors = (num: number) =>
{
    for (let i = 1; i <= num;i++)
        if (num % i == 0)
            facts.push(i) // push() methd add at the end
}

factors(num) // don't forget to call

console.log(`Factors of ${num}: ${facts.join("-")}`); // Template literals allow you to embed variables and expressions directly inside the string using ${}.