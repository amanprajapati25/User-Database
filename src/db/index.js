import mongoose from "mongoose";
import { DB_NAME, mongo } from "../constants.js";

async function DBConnect() {
    try{
        const connect = await mongoose.connect(`${mongo}/${ DB_NAME }`)
        console.log("connectedk",connect.connection.host)
    }
    catch(err){
        console.error("DB isn't connected",err)
        process.exit(1);
    }
}

export default DBConnect;

// const connect = await mongoose.connect(`mongodb://${process.env.MONGODB_URI}/${DB_NAME}`, {
