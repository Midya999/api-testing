const mongoose = require("mongoose");

const uri = "mongodb+srv://rupayanmidya2002_db_user:bqg4H6CacnvND0VG@api.icbhckb.mongodb.net/API";

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB Connected 🚀");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;