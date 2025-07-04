import { Router, Request, Response } from "express";
import { renderHomePage } from "../pages/home";
import { renderResponsePage } from "../pages/responder";
import { getAIResponse } from "../services/ai";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(renderHomePage());
});

router.post("/responder", async (req: Request, res: Response) => {
  try {
    const prompt = req.body.prompt as string;

    // Sanitização básica
    const sanitizedPrompt = prompt.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Validação
    if (!sanitizedPrompt || sanitizedPrompt.trim().length === 0) {
      return res.status(400).send("Erro: O prompt não pode estar vazio.");
    }

    if (sanitizedPrompt.length > 500) {
      return res.status(400).send("Erro: O prompt não pode ter mais de 500 caracteres.");
    }

    const aiResponse = await getAIResponse(sanitizedPrompt);

    res.send(renderResponsePage({ prompt: sanitizedPrompt, response: aiResponse }));

  } catch (error) {
    console.error("Erro ao processar a resposta da IA:", error);
    res.status(500).send("Ocorreu um erro interno. Tente novamente mais tarde.");
  }
});

export default router; 