import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API route to get AI learning assistance
app.post("/api/generate", async (req, res) => {
  const { field, problem, emotion, strategy } = req.body;

  if (!field || !problem) {
    return res.status(400).json({ error: "Field and problem description are required" });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const prompt = `The student is studying ${field}.
They are currently experiencing the emotional state: "${emotion}".
They describe their problem/challenge as: "${problem}".
The pedagogical strategy recommended is: "${strategy}".

Provide personalized, encouraging learning support. Break down the problem into manageable steps, validate their feelings, and adjust your tone to their emotional state:
- If Bored: Keep it highly engaging, concise, and highlight fascinating real-world connections.
- If Frustrated / Angry: Validate their frustration, be highly supportive, gentle, and guide them step-by-step.
- If Confused: Offer intuitive analogies, simplify concepts, and provide clear examples.
- If Curious / Excited: Feed their curiosity with deep insights, alternative perspectives, and a challenge.
- If Anxious / Fear: Be reassuring, lower the stakes, offer code template scaffolds, and emphasize progress over perfection.
- If Neutral: Provide a structured, clear explanation and core progression step.

Limit your response to 2 to 3 concise, beautifully formatted paragraphs of markdown.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are a warm, empathetic Academic Advisor and Emotion-Aware Learning Assistant.",
        },
      });

      return res.json({
        text: response.text || "I'm here to support you. Let's tackle this step-by-step.",
        modelUsed: "Gemini 3.5 Flash",
      });
    } catch (err: any) {
      console.error("Gemini API error:", err);
      // Fallback gracefully on API errors
    }
  }

  // Graceful Local Fallback generator if API key is not configured or fails
  const localFallbackResponses: Record<string, string[]> = {
    Bored: [
      `It's completely normal to feel tired, especially when a problem looks intriguing but requires a lot of energy. When a problem feels overwhelming, try to break it into tiny pieces. Just focus on understanding one small part at a time, rather than the whole. For now, prioritize resting and recharging. You can come back to this fascinating challenge when you feel more energized and ready to dive in.`,
      `I sense that this topic might feel a bit dry or exhausting right now. Let's make it exciting! Did you know that what you're studying right now underpins some of the most advanced technology in modern satellites? Let's take a 5-minute breather, drink some water, and come back to solve it using a fun, gamified approach.`
    ],
    Frustrated: [
      `Frustration is actually a sign that your brain is on the verge of a major breakthrough! Let's pause, take a deep breath, and reset. We can debug this step-by-step. Let's check the most common fail-points first, print out intermediate variables, and clear any syntax roadblocks together. You've got this!`,
      `Bugs and errors are just hidden opportunities to learn how systems really work under the hood. Let's strip away the complexity. If we isolate just the single line of code or formula causing the issue, we can solve it in no time. I'm right here with you.`
    ],
    Confused: [
      `It's totally okay to feel confused. Let's demystify this! Think of this concept like building a house: instead of trying to put up the roof first, we need to make sure our foundation is solid. Let's review the fundamental rules, write out a quick mental outline, and trace the logic step-by-step.`,
      `Let's use a quick analogy. If this problem were a map, we are currently looking at the entire continent. Let's zoom in on your current street! Let's break down the syntax, write a simple pseudocode draft, and build up your confidence gradually.`
    ],
    Curious: [
      `That is an absolutely brilliant question! Your curiosity is your greatest superpower as a learner. Let's explore this deeply. This connects directly to advanced structures like neural embeddings and optimization functions. Here's a quick preview of how professionals leverage this concept to build scalable systems.`,
      `I love how you're thinking about this! Since you're interested in the core mechanics, let's explore how we can optimize this further. We can look at algorithmic complexity, look up alternative paradigms, and design a custom sandbox to test your hypothesis.`
    ],
    Anxious: [
      `Take a deep, slow breath. There is absolutely no rush here, and making mistakes is a crucial part of becoming an expert. Let's lower the pressure completely. We don't need to write the perfect solution right away—let's just write one simple line of code or one basic formula that works, and build from there.`,
      `You are doing much better than you realize! Let's focus on small, low-stakes wins. We can write a tiny test case, verify it passes, and celebrate that step. I'm here to support you at whatever pace you need.`
    ],
    Neutral: [
      `Excellent baseline. Let's continue with our structured progression. We will examine the core challenge, write out the solution steps, and run a validation check to make sure our assumptions are correct. What specific aspect should we target first?`,
      `With a clear and focused mind, we can make great progress today. Let's dive straight into the logic, outline the primary objectives, and solve this challenge systematically.`
    ]
  };

  const list = localFallbackResponses[emotion] || localFallbackResponses.Neutral;
  const selectedResponse = list[Math.floor(Math.random() * list.length)];

  res.json({
    text: selectedResponse,
    modelUsed: "Rule-Based Dynamic Model (Local Fallback)",
  });
});

// Serve frontend
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Emotion-Aware Learning Assistant server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
