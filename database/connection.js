const mongoose = require("mongoose");
require('dotenv').config();

const uri = process.env.MONGO_URI

const connection = async() => {
    try{
        mongoose.connect(uri);
        console.log("Connection ok")
    }catch(error){
        console.log(error)
        throw new Error("Unable to connect to database")
    }
}

module.exports = {
    connection
}