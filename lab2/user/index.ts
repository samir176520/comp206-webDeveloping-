/* Write a TypeScript program to define a function accepts an indefinite number of User objects. 
Each User object should contain the following properties: id (number), name (string), email (string),
 and isSubscribed (boolean). The function should return the number of users who are subscribed. */

type User = {  // define structure only
   id:number 
   name:string
   email: string
   isSubscribed:boolean
}

let user1:User = {name: "fuser", id:0, email:"user1@email.com", isSubscribed: true} // here i define instance (object)
let user2:User = {name: "suser", id:1, email:"user2@email.com", isSubscribed: false}
let user3:User = {name: "tuser", id:2, email:"user3@email.com", isSubscribed: true}
let user4:User = {name: "fouser", id:3, email:"user4@email.com", isSubscribed: true}
let user5:User = {name: "muser", id:4, email:"user5@email.com", isSubscribed: false}

const counter = function (... user:User[]) : number 
{
    let counter = 0
    for (let i of user)
        if (i.isSubscribed == true)
            counter++;
    return counter
}

console.log("Number of subscribed users: " + counter(user1, user2, user3, user4,user5))