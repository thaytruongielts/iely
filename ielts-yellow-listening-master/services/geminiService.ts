
import { GoogleGenAI } from "@google/genai";

export async function explainAnswer(question: string, transcript: string, correctAnswer: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        You are an IELTS expert. Explain why the correct answer for the following question is "${correctAnswer}".
        Use the provided transcript segment as evidence.
        
        Question: ${question}
        
        Transcript Context: ${transcript.substring(0, 1000)}...
        
        Keep your explanation concise, friendly, and focused on helping the student understand the specific listening clue.
      `,
    });
    return response.text || "Sorry, I couldn't generate an explanation right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating explanation. Please check your connection.";
  }
}
