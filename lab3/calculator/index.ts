/*
Write a TypeScript program to create a simple calculator. 
A user should input two operand values using text fields. The program allows the following
operations: addition, subtraction, multiplication, division, and remainder.
These operations should be declared as functions within an interface
“MathOperations”. An object implementing that interface is used to
perform the operations. When the user clicks the “Calculate” button, the
program should display the results of all operations in a tabular format. The
header row should be distinguished from others using colors. If the second
operand is zero, an error message should be shown next to the text field
indicating that zero is not allowed.
*/
type MathOperations = {
    fnumber:number, snumber:number
    add: () => number // function decleration only in interface
    sub: () => number 
    mult: () => number
    div: () => number
    rem: () => number
}

// check if seconed number is 0 and assign to object

const button = document.querySelector("button")

let obj:MathOperations = 
{
    fnumber:1,snumber:1,
    add: () => obj.fnumber + obj.snumber,
    sub: () => obj.fnumber - obj.snumber,
    mult: () => obj.fnumber * obj.snumber,
    div: () => obj.fnumber / obj.snumber,
    rem: () => obj.fnumber % obj.snumber,
}

