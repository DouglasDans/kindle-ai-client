import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config';
import process from "process";

// Obtenha a chave de API do ambiente.
// Crie um arquivo .env na raiz do projeto e adicione a seguinte linha:
// GEMINI_API_KEY="SUA_CHAVE_API"
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("A variável de ambiente GEMINI_API_KEY não está definida.");
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

/**
 * Normaliza o texto da IA, limpando e formatando para exibição em HTML.
 * - Remove espaços extras.
 * - Substitui literais "\\n" e quebras de linha "\n" por "<br>".
 * - Garante que não haja mais de duas quebras de linha seguidas.
 */
function normalizeAIResponse(text: string): string {
  // Substitui a representação literal de quebra de linha e a quebra de linha real por <br>
  const withBreaks = text.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');

  // Remove espaços em branco extras, mas preserva as tags <br>
  const trimmed = withBreaks.replace(/(\s*<br>\s*)+/g, '<br><br>').trim();
  
  return trimmed;
}

export async function getAIResponse(prompt: string): Promise<string> {
  console.log(`Chamando modelo de IA com o prompt: "${prompt}"`);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const instruction = `
    Você é o Kindle AI, um assistente de leituras focado em ajudar os usuários a aprofundar o conhecimento sobre os livros que estão lendo. 
    Esclareça termos, explore assuntos e responda a dúvidas de forma direta.
    Estruture sua resposta em múltiplos parágrafos, separados por uma linha em branco. 
    Comece com uma introdução curta sobre o assunto e, em seguida, desenvolva o assunto em outros parágrafos. 
    Responda de acordo com o idioma em que o usuário fez a pergunta.
    Responda apenas com texto puro, sem usar Markdown, HTML ou qualquer outra formatação.`;
    const fullPrompt = `${instruction}\\n\\n---\\n\\n${prompt}`;

    const result = await model.generateContent(fullPrompt);
    const response = result.response;
    const text = response.text();
    
    console.log("Modelo de IA retornou a resposta.");
    
    return normalizeAIResponse(text);
  } catch (error) {
    console.error("Erro ao chamar a API do Gemini:", error);
    throw new Error("Não foi possível obter uma resposta da IA.");
  }
} 