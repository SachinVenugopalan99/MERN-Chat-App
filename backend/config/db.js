const mongoose = require('mongoose');

const password = 'Sachin@00';

const encodedPassword = encodeURIComponent(password);


const MONGO_URI=`mongodb+srv://sachinvenugopalan:${encodedPassword}@cluster0.ri09zts.mongodb.net/?retryWrites=true&w=majority`

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(MONGO_URI, {
            useNewURLParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
     console.log(`Error is ${err.message}`);
     process.exit();
    }
}

module.exports = connectDB;