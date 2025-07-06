export const homePageTemplate = `
<!DOCTYPE html>
<html lang="en">
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
        <p>Ask a question to the AI.</p>
        <form action="/response" method="POST">
            <textarea 
                name="prompt" 
                rows="10" 
                cols="40" 
                maxlength="500" 
                placeholder="Type your question here..."
                autofocus
                required
            ></textarea>
            <p style="font-size: 0.8rem; margin-top: 0.5rem; color: #555;">
                Model used: gemini-2.0-flash.
            </p>
            <p style="font-size: 0.8rem; margin-top: 0.5rem; color: #555;">
                The AI can make mistakes. Consider checking important information.
            </p>
            <br>
            <button type="submit">Submit</button>
        </form>
    </main>
</body>
</html>
`;

export const renderHomePage = () => {
    return homePageTemplate;
} 