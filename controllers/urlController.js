import URL from "../models/url.js";
import shortid from "shortid";

// function to genrerate short url for given url in body as req 
export const  genrerateNewShortUrl=async(req,res)=>{
    const body = req.body;
    if(!body.url) return res.status(400).json({error:"url is required"});
    const ShortID = shortid();

    await URL.create({
        shortId: ShortID,
        redirectURL:body.url,
        totalClicks:[], 
    });

    return res.json({id: ShortID});

}

// function to get analytics of  a particular short url basded on iid 
export const getAnalytics=async(req,res)=>{
    const shortId = req.params.shortId;
    // kuki await hmehsa kuch return krta h 
    const result =await URL.findOne({shortId});
    return res.json({
        totalClicks:result.totalClicks.length,
        analytics:result.totalClicks,
    });
} 

// fucntion to redirect to the original URL mapped to short url & updating visit info
export const redirectUrl = async(req,res)=>{
    // 1.fetching from db 
    // increatmenting click an dreturning clicl cout 
    const shortId = req.params.shortId;
    // joh ye new entry ki h us url p
    // usme joh shortId ki redirect url h DB m uski value p redirect kr rhe 
   const entry= await URL.findOneAndUpdate({
        shortId
    },
    {
        $push:
        {
            totalClicks:
            {
                timestamp: Date.now(),
            },
        }

    });

    res.redirect(entry.redirectURL);
    
    // totalClicks++;
}