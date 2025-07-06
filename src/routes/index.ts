import { Router, Request, Response } from "express";
import { renderHomePage } from "../pages/home";
import { renderResponsePage } from "../pages/response";
import { getAIResponse } from "../services/ai";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(renderHomePage());
});

router.get("/response", (req: Request, res: Response) => {
  res.redirect("/");
});

router.post("/response", async (req: Request, res: Response) => {
  try {
    const prompt = req.body.prompt as string;

    if (!prompt || prompt.trim() === "") {
      return res.redirect("/");
    }

    // Basic sanitization
    const sanitizedPrompt = prompt.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Validation
    if (sanitizedPrompt.length > 500) {
      return res
        .status(400)
        .send("Error: The prompt cannot exceed 500 characters.");
    }

    const aiResponse = await getAIResponse(sanitizedPrompt);

    res.send(
      renderResponsePage({ prompt: sanitizedPrompt, response: aiResponse })
    );
  } catch (error) {
    console.error("Error processing AI response:", error);
    res.status(500).send("An internal error occurred. Please try again later.");
  }
});

export default router; 