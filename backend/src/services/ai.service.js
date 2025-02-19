require('dotenv').config();  // Add this at the top
const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log("API Key:", process.env.GOOGLE_GEMINI_KEY);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",
    systemInstruction: `MAXLINe of code 5points Critique code like a seasoned engineer: Explain, evaluate, and enhance with actionable feedback, focusing on clarity, correctness, and best practices.
Prioritize security, performance, and maintainability, offering specific improvements and refactoring suggestions with clear examples for optimal code quality. MAXLINe of code 5points`
 });  // Changed model name

async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = {
    generateContent
}