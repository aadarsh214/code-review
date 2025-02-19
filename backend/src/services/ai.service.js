require('dotenv').config();  // Add this at the top
const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log("API Key:", process.env.GOOGLE_GEMINI_KEY);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });  // Changed model name

async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = {
    generateContent
}