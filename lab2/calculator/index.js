// interface "MathOperations" with 5 (-, + *, %, /) operations and two numbers 
// define an object from interface
// click button eventListener
// display all operations in tabular form
// make header row distancit
// error message in the seconed operant if zero entered indicate zero is not allowed
function results(obj) {
    var display = document.getElementById("results");
    display.innerHTML = "";
    display.innerHTML += "<tr><td>+</td><td>" + obj.add() + "</td></tr>";
    display.innerHTML += "<tr><td>-</td><td>" + obj.sub() + "</td></tr>";
    display.innerHTML += "<tr><td>*</td><td>" + obj.mult() + "</td></tr>";
    display.innerHTML += "<tr><td>/</td><td>" + obj.div() + "</td></tr>";
    display.innerHTML += "<tr><td>%</td><td>" + obj.rem() + "</td></tr>";
}
var button = document.getElementById("btn");
console.log("test");
button.addEventListener("click", function () {
    // get textfields
    var fnumber = document.getElementById("fnumber");
    var snumber = document.getElementById("snumber");
    var obj = {
        fnumber: fnumber.value, snumber: snumber.value,
        add: function () { return obj.fnumber + obj.snumber; },
        sub: function () { return obj.fnumber - obj.snumber; },
        mult: function () { return obj.fnumber * obj.snumber; },
        div: function () { return obj.fnumber / obj.snumber; },
        rem: function () { return obj.fnumber % obj.snumber; },
    };
    results(obj);
    console.log("button pressed");
    if (obj.snumber == 0) {
        var error = document.getElementById("error");
        error.innerText = "Can't take % or / by 0";
    }
});
