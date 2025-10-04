import fs from "fs/promises"

const filePath = "/home/behzodbek/coin-collection-manager/config/currentUser.json"

export const saveUser = async (data)=>{
    await fs.writeFile(filePath, JSON.stringify(data))
}

export const readUser = async ()=>{
    const userAuth = await fs.readFile(filePath)
    return JSON.parse(userAuth)
}

export const clearUser = async ()=>{
    try{
        await fs.writeFile(filePath, JSON.stringify({}))
    }catch(e){

    }
}