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
    createdBy:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users',
    }
}
,{timestamps:true} );

const URL =mongoose.model('url',urlSchema);

export default URL;
