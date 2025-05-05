var username = document.getElementById("username");
var password = document.getElementById("password");
var semester = document.getElementById("semester");
var form = document.getElementById("form");
// validate usernamefield non-empty between [6-12] charcters
function userNameValid() {
    if (username.value.length == 0) {
        return false;
    }
    else if (username.value.length < 6 && username.value.length > 12) {
        return false;
    }
    else
        return true;
}
form.addEventListener("submit", function () {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    console.log(userNameValid());
});
// validate passwordfield at least 6 charcters have one upper and one lower case charcters
// semester is recuired 
// if semester is one or two course comp 206 shouldn't have taken yet
// if user select to resicve a newletter alert message about potential spam should displayed
// function to chage label color for invalid input to red 
// in focus in any form element back it to black
// if all data is valid add a text area with all data inside it 
// when user hover or click on text area a conformation message should displayed
// if the user click ok button then form is submitied and new window rise with thanks for regesteration
// new window will appear containing the following message “Thanks for your registration”. This
// appearing message will then continue to flicker, constantly changing its color and
// size on short time intervals.
