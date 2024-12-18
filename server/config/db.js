const mongoose = require('mongoose');

// connects mongodb database to the server
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connnected: ${conn.connection.host}`);
    } catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;