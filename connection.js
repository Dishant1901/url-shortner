import mongoose from "mongoose";

const connectDB = async () => {
    const MONGODB_URL=`mongodb+srv://dishantsinghom:url-shortner-db@cluster0.8vgpu2u.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,     
        })
        console.log("MongoDB Connected....");
    }catch(error){
        console.error('error whole connecting to db'.error.message);
    }
}

export default connectDB;