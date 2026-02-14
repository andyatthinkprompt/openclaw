
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
console.log("Using API Key:", apiKey ? apiKey.substring(0, 8) + "..." : "NONE");

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run() {
  try {
    const result = await model.generateContent("Explain how AI works in one sentence.");
    const response = await result.response;
    const text = response.text();
    console.log("Success! Response:", text);
  } catch (error) {
    console.error("Error testing API key:", error.message);
  }
}

run();
