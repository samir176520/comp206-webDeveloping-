// check user exist 
// addnew user
// loading users
import fs from 'fs/promises'
import { user } from './user'
import { join } from 'path'


let data : user[] 

const fileData = join(__dirname, "../users.json")

async function loadingData() {
    try
    {
        const _data = await fs.readFile(fileData, "utf-8") // wait untill this readed
        data = JSON.parse(_data)

    } catch (message)
    {
        console.log(`Error: ${message}`)
        data = []
    }
}



export async function userExist (user : user) {
    await loadingData()
    console.log("Looking for:", user); // for debugging 
    // console.log("Available users:", data); 
    return data.find(data => data.userName == user.userName && data.password == user.password)

}

export async function addUser(user : user) {
    await loadingData()  
    if (await userExist(user) )
        return false
    data.push(user)
    await fs.writeFile(fileData, JSON.stringify(data, null, 4)) // write user null if there a confilict and spaces is 2
    return true
}
