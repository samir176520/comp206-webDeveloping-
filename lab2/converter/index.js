// create text field to accept degree and convert it based in choices (checkBoxes) Fahrenheit, Kelvin, or both
// Event listener to button convert
// if button "click" get tempurture perform operatins based on user choice 
// display the output
var inputfield = document.getElementById("tempurature");
var tempurature = inputfield.value;
var area = document.getElementById("display");
function display() {
    var both = document.getElementById("both");
    var Kelvin = document.getElementById("kelv");
    var fehr = document.getElementById("fehr");
    area.innerHTML = ""; // reset area if there is any calculation before
    if (both.checked == true) {
        //parseFloat() convert a string to float number from left to write 
        // return NAN if it start with not vaild number "a212" -> NAN 
        // return vaild start "12.1am" -> 12.1
        area.innerHTML = "degree in kelvin: " + (parseFloat(tempurature) + 273.15) + "<br>";
        area.innerHTML += "degree in fehrienhite: " + (parseFloat(tempurature) * 9 / 5) + 32 + "<br>";
    }
    else if (Kelvin.checked == true)
        area.innerHTML = "degree in kelvin: " + (parseFloat(tempurature) + 273.15) + "<br>";
    else if (fehr.checked == true)
        area.innerHTML += "degree in fehrienhite: " + (parseFloat(tempurature) * 9 / 5) + 32 + "<br>";
}
var button = document.getElementById("btn");
button.addEventListener("click", function () {
    display();
    console.log("Button Pressed");
    event === null || event === void 0 ? void 0 : event.preventDefault();
});
