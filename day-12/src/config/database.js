const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connect to MongoDB");
    })
}

module.exports = connectDB; 