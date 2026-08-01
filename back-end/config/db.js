import mongoose, { connect, Mongoose } from "mongoose";
import dns from "dns";
import dotenv from "dotenv";
dotenv.config({ path: "../.env"});

dns.setServers(["1.1.1.1", "8.8.8.8"])
const { PORT, MONGO_URL } = process.env;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

