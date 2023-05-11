import URL from "../models/url.js";
import shortid from "shortid"
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

export const getAnalytics=async(req,res)=>{
    const shortId = req.params.shortId;
    // kuki await hmehsa kuch return krta h 
    const result =await URL.findOne({shortId});
    return res.json({
        totalClicks:result.totalClicks.length,
        analytics:result.totalClicks,
    });
} 
// module.exports = {genrerateNewShortUrl};