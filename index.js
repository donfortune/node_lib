const express = require('express');
const app = express();
const libRouter = require('./routes/libRoutes');
const userRouter = require('/Users/mac/node_libApi/routes/userRoutes.js');
const mongoose = require('mongoose');

app.use(express.json()); // Parse incoming JSON data

// MongoDB Connection Function
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://donfortune1:Tangban1.@cluster0.1vrmw.mongodb.net/myDatabase", {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('✅ MongoDB connected successfully');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1); // Exit the process if connection fails
    }
};

// Call the connection function
connectDB();

app.use("/api/v1", libRouter)
app.use("/api/v1", userRouter)

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})