import express from "express";
import cors from "cors";
import generateRouter from "./routes/generate.js";

const app = express();

// Enable CORS so frontend (3001) can call backend (3000)
app.use(cors());

// Enable JSON body parsing
app.use(express.json());

// Log every incoming request (helps debugging)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get("/", (req, res) => {
  res.send("AI Test Case Generator backend is running");
});

// Mount the /generate route
app.use("/generate", generateRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
