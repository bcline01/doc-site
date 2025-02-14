import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",  // Allow frontend to access backend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

// Routes
app.use("/api/auth", authRoutes);

// ✅ Test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
