import jwt from "jsonwebtoken";

const secretKey ="Dishant@1901";

export function setUser(user){
    return jwt.sign({
        _id:user._id,
        email:user.email,
    },
    secretKey
    );
}

export function getUser(token){
    // a cehck 
    if(!token){return null;}
    try{

        return jwt.verify(token,secretKey);
    }
    catch(error){
        console.error(error.message);
    }
}