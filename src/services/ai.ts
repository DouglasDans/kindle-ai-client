import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config';
import process from "process";

// Get the API key from the environment.
// Create a .env file in the root of the project and add the following line:
// GEMINI_API_KEY="YOUR_API_KEY"
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("The GEMINI_API_KEY environment variable is not set.");
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

/**
 * Normalizes the AI text, cleaning and formatting it for HTML display.
 * - Removes extra spaces.
 * - Replaces "\\n" literals and "\n" newlines with "<br>".
 * - Ensures no more than two consecutive line breaks.
 */
function normalizeAIResponse(text: string): string {
  // Replaces the literal representation of a newline and the actual newline with <br>
  const withBreaks = text.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');

  // Removes extra whitespace but preserves <br> tags
  const trimmed = withBreaks.replace(/(\s*<br>\s*)+/g, '<br><br>').trim();
  
  return trimmed;
}

export async function getAIResponse(prompt: string): Promise<string> {
  console.log(`Calling AI model with prompt: "${prompt}"`);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const instruction = `
    You are Kindle AI, a reading assistant focused on helping users deepen their knowledge about the books they are reading.
    Clarify terms, explore subjects, and answer questions directly.
    Structure your response in multiple paragraphs, separated by a blank line.
    Start with a short introduction to the subject, and then develop the subject in other paragraphs.
    Respond according to the language in which the user asked the question.
    Respond only with plain text, without using Markdown, HTML, or any other formatting.`;
    const fullPrompt = `${instruction}\\n\\n---\\n\\n${prompt}`;

    const result = await model.generateContent(fullPrompt);
    const response = result.response;
    const text = response.text();
    
    console.log("AI model returned the response.");
    
    return normalizeAIResponse(text);
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Could not get a response from the AI.");
  }
} 