// problem 1, 2, 3
type user  = {username: string, age: number}

const state : boolean = true

// {users: {username: string, age: number}} for specify return object
function fetchData () : Promise<{users:{username:string,age:number}}>  {
    return new Promise((resolve, reject) => {
        if (state) 
        {
            setTimeout(() => {
                resolve({users: {username: "Ahmed", age: 1}})
                },2000)
        }
        else
        {
            setTimeout(() => {
                reject("Rejected")
            }, 2000)
        }
    })
}

async function displayData()  {
    try {
    const data = await fetchData() // await wait for sucsses return error if promise reject
    console.log(`data is: `, data)
    login(data.users)
    } 
    catch (message) { // handle reject errors comes from await
        console.log("error: ", message)
    }
    console.log(`program Complete.`)
}

function login(user:user) {
    
    if (user.username === "Ahmed")
        console.log("Successfully logged in!")
    else
        console.log("Failed to login, please try again")
}

console.log(`program start..... `)
displayData()