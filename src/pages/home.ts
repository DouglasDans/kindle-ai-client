export const homePageTemplate = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kindle AI</title>
    <style>
        body {
            font-family: sans-serif;
            background-color: #ffffff;
            color: #000000;
            padding: 1rem;
        }
        main {
            max-width: 100%;
        }
        h1 {
            font-size: 1.5rem;
        }
        textarea {
            width: 95%;
            font-size: 1rem;
            padding: 0.5rem;
            border: 1px solid #000000;
        }
        button {
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
            margin-top: 0.5rem;
            border: 1px solid #000000;
            background-color: #f0f0f0;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <main>
        <h1>Kindle AI</h1>
        <p>Faça uma pergunta para a IA.</p>
        <form action="/response" method="POST">
            <textarea 
                name="prompt" 
                rows="10" 
                cols="40" 
                maxlength="500" 
                placeholder="Digite sua pergunta aqui..."
                autofocus
                required
            ></textarea>
            <p style="font-size: 0.8rem; margin-top: 0.5rem; color: #555;">
                Modelo utilizado: gemini-2.0-flash.
            </p>
            <p style="font-size: 0.8rem; margin-top: 0.5rem; color: #555;">
                A IA pode cometer erros. Considere verificar informações importantes.
            </p>
            <br>
            <button type="submit">Enviar</button>
        </form>
    </main>
</body>
</html>
`;

export const renderHomePage = () => {
    return homePageTemplate;
} 