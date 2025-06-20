import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "" });

async function main() {
    const models = await ai.models.get({model: "gemini-2.0-flash"  });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say Hi from Gemini AI to Andi Fajar Kurniawan",
  });
  console.log(response.text);
}

await main();