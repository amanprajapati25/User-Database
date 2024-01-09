import mongoose from "mongoose";
import { DB_NAME } from "../constants";

async function DBConnect() {
    try{
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${ DB_NAME }`)
        console.log("connected",connect.connection.host)
    }
    catch(err){
        console.error("DB isn't connected",err)
        process.exit(1);
    }
}

export default DBConnect;