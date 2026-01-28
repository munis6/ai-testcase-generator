import express from "express";
import cors from "cors";
import { generateTestCases } from "./ai/testGenerator.js";

const app = express();

// Enable CORS so frontend (3001) can call backend (3000)
app.use(cors());

// Enable JSON body parsing
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.send("AI Test Case Generator backend is running");
});

// Main AI Test Case Generation endpoint
app.post("/generate", async (req, res) => {
  const { requirement } = req.body;

  const result = await generateTestCases(requirement);

  res.json(result);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

