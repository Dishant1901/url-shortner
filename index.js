import express from "express";
import router from "./Routes/urlRoute.js"
import connectDB from "./connection.js";
import URL from "./models/url.js";

const app=express();
const PORT=8000;

connectDB();

app.use(express.json());
app.use("/url",router);

app.get('/test',(req, res) => {
    return res.send("<h1> example of server side rendering</h1>");
})


// app.get('/:shortId',async(req,res)=>{
//     // 1.fetching from db 
//     // increatmenting click an dreturning clicl cout 
//     const shortId = req.params.shortId;
//     // joh ye new entry ki h us url p
//     // usme joh shortId ki redirect url h DB m uski value p redirect kr rhe 
//    const entry= await URL.findOneAndUpdate({
//         shortId
//     },
//     {
//         $push:
//         {
//             totalClicks:
//             {
//                 timestamp: Date.now(),
//             },
//         }

//     });

//     res.redirect(entry.redirectURL);
//     // totalClicks++;
// })


app.get("/",(req,res)=>{
    res.send("hello world");
});



app.listen(PORT,()=>{
    console.log(`server rinning at port:${PORT}`);
});