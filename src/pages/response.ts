interface ResponsePageData {
    prompt: string;
    response: string;
}

export const renderResponsePage = (data: ResponsePageData): string => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Answer - Kindle AI</title>
    <style>
        body {
            font-family: sans-serif;
            background-color: #ffffff;
            color: #000000;
            padding: 1rem;
            word-wrap: break-word;
        }
        main {
            max-width: 100%;
        }
        h2 {
            font-size: 1.25rem;
        }
        p, a {
            font-size: 1rem;
        }
        hr {
            border: 0;
            border-top: 1px solid #000000;
        }
        a {
            display: inline-block;
            margin-top: 1rem;
            padding: 0.75rem 1.5rem;
            border: 1px solid #000000;
            background-color: #f0f0f0;
            color: #000000;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <main>
        <h2>Your Question:</h2>
        <p>
            ${data.prompt}
        </p>
        <hr>
        <h2>AI Response:</h2>
        <p>
            ${data.response}
        </p>
        <hr>
        <a href="/">Ask another question</a>
    </main>
</body>
</html>
`;
} 