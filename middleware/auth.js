import { getUser } from "../service/auth.js";

 export function restrictToLoogedinUser(req,res,next){
    const userUid=req.cookies.uuid;

    if(!userUid) return res.redirect("/login");

    const user = getUser(userUid);
    // checking if user is set to session ID 
    if(!user) return res.redirect("/login");

    req.user=user;
    next();
}

// function to check just wether user is authenticated or not
export function checkAuth(req, res, next) {
    const userUid=req.cookies.uuid;

    const user = getUser(userUid);
    req.user=user;
    next();
}

// module.exports = {restrictToLoogedinUser,};