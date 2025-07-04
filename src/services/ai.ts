/**
 * Simula uma chamada para um modelo de IA como o Gemini.
 * @param prompt O prompt a ser enviado para o modelo.
 * @returns Uma promessa que resolve com a resposta da IA.
 */
export async function getAIResponse(prompt: string): Promise<string> {
  console.log(`Chamando modelo de IA com o prompt: "${prompt}"`);

  // Simula um atraso de rede de 1.5 segundos
  await new Promise(resolve => setTimeout(resolve, 1500));

  const simulatedResponse = `Esta é uma resposta simulada para a sua pergunta sobre "${prompt}". O modelo a ser usado aqui será o gemini-2.5-flash.`;
  
  console.log("Modelo de IA retornou uma resposta simulada.");
  return simulatedResponse;
} 