// interface "MathOperations" with 5 (-, + *, %, /) operations and two numbers 
// define an object from interface
// click button eventListener
// display all operations in tabular form
  // make header row distancit
// error message in the seconed operant if zero entered indicate zero is not allowed

type MathOperations = { // interface
    fnumber:any, snumber:any // can work with unknown but you will check if value is number or not
    add: () => number // function decleration only in interface
    sub: () => number 
    mult: () => number
    div: () => number
    rem: () => number
}



function results(obj: MathOperations) : void 
{
    let display = document.getElementById("results") as HTMLDivElement
    display.innerHTML = ""
    display.innerHTML += "<tr><td>+</td><td>" + obj.add() + "</td></tr>" 
    display.innerHTML += "<tr><td>-</td><td>" + obj.sub() + "</td></tr>" 
    display.innerHTML += "<tr><td>*</td><td>" + obj.mult() + "</td></tr>"
    display.innerHTML += "<tr><td>/</td><td>" + obj.div() + "</td></tr>"
    display.innerHTML += "<tr><td>%</td><td>" + obj.rem() + "</td></tr>"
}

const button = document.getElementById("btn") as HTMLButtonElement
console.log("test")
button.addEventListener("click", () => {
    // get textfields
    let fnumber =  document.getElementById("fnumber") as HTMLInputElement
    let snumber =  document.getElementById("snumber") as HTMLInputElement 

    let obj:MathOperations = {
        fnumber:fnumber.value,snumber:snumber.value,
        add: () => obj.fnumber + obj.snumber,
        sub: () => obj.fnumber - obj.snumber,
        mult: () => obj.fnumber * obj.snumber,
        div: () => obj.fnumber / obj.snumber,
        rem: () => obj.fnumber % obj.snumber,
    }


    results(obj)
    console.log("button pressed")

    if (obj.snumber == 0)
    {
        const error = document.getElementById("error") as HTMLSpanElement
        error.innerText = "Can't take % or / by 0"
    }
})