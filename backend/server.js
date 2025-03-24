import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";

// Load environment variables
dotenv.config();

// Ensure MONGO_URI is set
if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI is missing in .env file");
  process.exit(1);
}

// Connect to Database
connectDB()
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json()); // Parse JSON
app.use(cors({ origin: process.env.CLIENT_URL || "*" })); // Allow frontend origin

// Root Route
app.get("/", (req, res) => {
  res.send("Job Management API is running...");
});

// Job Routes
app.use("/api/jobs", jobRoutes);

// 404 Not Found Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Route Not Found" });
});

app.get("/",(req,res)=>{
    res.send("API Working")
})

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
