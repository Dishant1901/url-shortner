// importing packages 
import express from "express";
import cookieParser from "cookie-parser";
import path from 'path';
import connectDB from "./connection.js";
//
import URL from "./models/url.js";
import router from "./Routes/urlRoute.js"
import staticRoute from './Routes/staticRouter.js';
import userRoute from "./Routes/userRoute.js";
import { checkAuth, restrictToLoogedinUser } from "./middleware/auth.js";


const app=express();
const PORT=8000;

connectDB();
//setting up view engine
app.set("view engine","ejs");
app.set('views',path.resolve('./views'));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());    

// importing req and res call to routes
app.use("/url", restrictToLoogedinUser, router);
app.use('/user',userRoute);
app.use('/', checkAuth,staticRoute);

// app.get('/test',async (req, res) => {
//     const allUrls = await URL.find({});
//     return res.render('home',{
//         urls: allUrls,
//     });
// });




app.listen(PORT,()=>{
    console.log(`server rinning at port:${PORT}`);
});