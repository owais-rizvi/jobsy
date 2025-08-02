import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URI);
        console.log("Connected to the db", conn.connection.host);
    }
    catch(error){
        console.log("Error while connecting to the database.",error);
    }
}


