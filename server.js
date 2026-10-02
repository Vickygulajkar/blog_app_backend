require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.json());


const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);



app.get("/", (req, res) => {
    res.send("Server is running");
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});