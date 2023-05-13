import User from "../models/user.js";
import { v4 } from "uuid";
import { setUser } from "../service/auth.js";

export const handleUserSignUp =async(req,res)=>{
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
// console.log("creating data");
    return res.redirect("/");
}

export const handleUserLogin =async(req,res)=>{
    const {email,password} = req.body;
    const user =await User.findOne({email,password});

    // console.log("user,");

    // handling error 
    if(!user){
            return res.render("login",{
                error: "invalid user or password"
            });
        }

        // setting uuid value to sessio uuid
        const sessionId = v4();
        // calling function to map logged in user to sessionId
        setUser(sessionId, user);
        // setting cookie in browser with name 'uuid'& it's value being set to sessionId
        res.cookie('uuid',sessionId);
  
    return res.redirect("/");
}