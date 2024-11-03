import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const dbInstant = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n DB connected !! DB Host: ${dbInstant.connection.host}`)
    console.log(dbInstant)
  } catch (err) {
    console.log('Err on dbConnect: ',err)
    throw err
    // process.exit(1) 
  }
}

export default connectDB