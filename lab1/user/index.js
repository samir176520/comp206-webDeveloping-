/* Write a TypeScript program to define a function accepts an indefinite number of User objects.
Each User object should contain the following properties: id (number), name (string), email (string),
 and isSubscribed (boolean). The function should return the number of users who are subscribed. */
var user1 = { name: "fuser", id: 0, email: "user1@email.com", isSubscribed: true };
var user2 = { name: "suser", id: 1, email: "user2@email.com", isSubscribed: false };
var user3 = { name: "tuser", id: 2, email: "user3@email.com", isSubscribed: true };
var user4 = { name: "fouser", id: 3, email: "user4@email.com", isSubscribed: true };
var user5 = { name: "muser", id: 4, email: "user5@email.com", isSubscribed: false };
var counter = function () {
    var user = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        user[_i] = arguments[_i];
    }
    var counter = 0;
    for (var _a = 0, user_1 = user; _a < user_1.length; _a++) {
        var i = user_1[_a];
        if (i.isSubscribed == true)
            counter++;
    }
    return counter;
};
console.log("Number of subscribed users: " + counter(user1, user2, user3, user4, user5));
