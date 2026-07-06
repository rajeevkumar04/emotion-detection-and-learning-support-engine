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
  const localFallbackResponses: Record<string, (field: string, problem: string, strategy: string) => string[]> = {
    Bored: (field, problem, strategy) => [
      `When learning ${field}, it is normal to feel drained by a challenging problem like "${problem}". Start by breaking that problem into a smaller task, then use ${strategy.toLowerCase()} to keep the process engaging. Focus on one tiny success first, and let the momentum build from there.`,
      `This looks like a perfect moment to switch gears from intense analysis to hands-on exploration. For your ${field} challenge, try a short interactive exercise that reinforces the core idea in a playful way. ${strategy} can make the material feel less tiring and more inspiring.`
    ],
    Frustrated: (field, problem, strategy) => [
      `Frustration means you're on the right track, especially with a difficult ${field} problem like "${problem}". Start by pausing, then use ${strategy.toLowerCase()} to simplify the issue step-by-step. Break the problem down into the smallest possible pieces, confirm each one, and avoid chasing too many answers at once.`,
      `This ${field} challenge is causing a lot of tension, so the best solution is to lower the pressure and inspect the basics. Use ${strategy.toLowerCase()} to isolate the source of the issue, then fix one thing at a time so the whole problem becomes manageable.`
    ],
    Confused: (field, problem, strategy) => [
      `It is okay to feel confused by "${problem}" in ${field}. Let's treat this like a map: first locate the key concepts, then build a clear path using ${strategy.toLowerCase()}. Once the foundation is solid, the rest will begin to make sense.`,
      `For a hard concept in ${field}, the smartest move is to slow down and simplify. Apply ${strategy.toLowerCase()} to create a visual or step-by-step explanation, then verify each point before moving forward.`
    ],
    Curious: (field, problem, strategy) => [
      `Your curiosity is exactly the right attitude for a question like "${problem}". Use ${strategy.toLowerCase()} to dig deeper into the mechanics of ${field}, then follow up with a small challenge or extension to keep your learning momentum strong.`,
      `Because you're excited about ${field}, try exploring the concept from multiple angles. ${strategy} is a great way to move beyond the immediate problem and discover why it matters in real systems and real-world applications.`
    ],
    Anxious: (field, problem, strategy) => [
      `When anxiety is present, the best solution is reassurance plus a gentle step. For your ${field} problem, start with the simplest possible version and use ${strategy.toLowerCase()} to keep the pace calm and safe. Small, successful steps are the fastest path to confidence.`,
      `This ${field} challenge feels heavy, so the most helpful thing is to reduce the scope. Apply ${strategy.toLowerCase()} with a low-pressure example, then build from that success rather than trying to solve everything at once.`
    ],
    Neutral: (field, problem, strategy) => [
      `This is a good moment to stay focused and systematic. For a ${field} problem like "${problem}," use ${strategy.toLowerCase()} to organize the solution into clear, sequential steps. Confirm each part as you go and keep the momentum steady.`,
      `A neutral state is ideal for precise progress. Follow a clean plan: define the goal, break the problem into parts, and use ${strategy.toLowerCase()} to make the next move straightforward and effective.`
    ]
  };

  const list = (localFallbackResponses[emotion] || localFallbackResponses.Neutral)(field, problem, strategy);
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
