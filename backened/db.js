const mongoose = require('mongoose');
const URI = "mongodb://localhost:27017/users";
const connectToMongodb=()=>{
    try{
        mongoose.connect(URI);
        console.log("Connected to mongo successfully")
    }
    catch(error) {
        console.log(error)
    }
}
module.exports = connectToMongodb;