import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function DBConnect() {
    try{
        console.log("chkk", process.env.PORT)
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${ DB_NAME }`)
        console.log("connected",connect.connection.host)
    }
    catch(err){
        console.error("DB isn't connected",err)
        process.exit(1);
    }
}

export default DBConnect;