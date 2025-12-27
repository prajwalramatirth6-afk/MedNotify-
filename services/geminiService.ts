
import { GoogleGenAI } from "@google/genai";

// Use Vite's environment variable system
// Always use the import.meta.env.VITE_API_KEY or fall back to API_KEY
const getAI = () => new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY || import.meta.env.API_KEY || '' });

export const getMedicationInsight = async (name: string, dose: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a very brief (max 2 sentences) tip for taking ${name} (${dose}). Focus on common advice like "take with food" or "avoid alcohol". Keep it professional and helpful.`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Insight Error:", error);
    return "Remember to take as prescribed by your doctor.";
  }
};

export const getDailyHealthTip = async () => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Provide a unique, one-sentence health tip for someone taking daily medications. Focus on hydration, consistency, safety, or general wellness. Make it encouraging and short.",
    });
    return response.text || "Consistency is the key to effective treatment. Stay on track!";
  } catch (error) {
    console.error("Daily Tip Error:", error);
    const fallbacks = [
      "Drink a full glass of water with your medication for better absorption.",
      "Try to take your medicine at the same time every day to build a habit.",
      "Keep a list of all your medications in your wallet for emergencies.",
      "Store your medications in a cool, dry place away from direct sunlight.",
      "Don't hesitate to ask your pharmacist if you have questions about side effects."
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }
};
