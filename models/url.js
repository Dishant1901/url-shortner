import mongoose from "mongoose";

const urlSchema =new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
    totalClicks:[{timestamp:{type:Number}}],
}
,{timestamps:true} );

const URL =mongoose.model('url',urlSchema);

export default URL;
