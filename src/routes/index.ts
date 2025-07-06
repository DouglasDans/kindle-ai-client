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

    // Sanitização básica
    const sanitizedPrompt = prompt.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Validação
    if (sanitizedPrompt.length > 500) {
      return res
        .status(400)
        .send("Erro: O prompt não pode ter mais de 500 caracteres.");
    }

    const aiResponse = await getAIResponse(sanitizedPrompt);

    res.send(
      renderResponsePage({ prompt: sanitizedPrompt, response: aiResponse })
    );
  } catch (error) {
    console.error("Erro ao processar a resposta da IA:", error);
    res.status(500).send("Ocorreu um erro interno. Tente novamente mais tarde.");
  }
});

export default router; 