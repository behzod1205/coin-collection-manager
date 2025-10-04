import BaseController from "./base.controller.js";
const table = "users"

let userController = new BaseController(table)

userController.loginCheck = async(req, res)=>{
    try{
        const user = req.user

        res.json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
                }
        })
    }catch(err){
        console.log("Error: ", err)
    }
}

// console.log(userController)
export default userController