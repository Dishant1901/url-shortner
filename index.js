import express from "express";
import router from "./Routes/urlRoute.js"
import connectDB from "./connection.js";
import path from 'path';
import URL from "./models/url.js";
import staticRoute from './Routes/staticRouter.js'

const app=express();
const PORT=8000;

connectDB();
app.set("view engine","ejs");
app.set('views',path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/url",router);
app.use('/',staticRoute);

app.get('/test',async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home',{
        urls: allUrls,
    });
});




// app.get("/",(req,res)=>{
//     res.send("hello world");
// });



app.listen(PORT,()=>{
    console.log(`server rinning at port:${PORT}`);
});