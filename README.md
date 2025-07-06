# Kindle AI Client

A minimalist, lightweight, and fast AI client, specifically designed to run on the Kindle's limited web browser.

## The Problem

Modern AI clients like ChatGPT and Gemini are built with complex, JavaScript-heavy frontends. They are powerful but completely incompatible with the Kindle's rudimentary browser, which lacks support for modern web standards. This leaves Kindle users without a simple way to interact with large language models.

## The Solution

**Kindle AI Client** solves this by being a **100% Server-Side Rendered (SSR)** application.

The entire flow is handled on the backend. The user submits a simple HTML form, the server gets the prompt, queries the AI, and returns a pure, lightweight HTML page with the response. No JavaScript is required on the client-side, ensuring full compatibility with the Kindle browser.

The project's philosophy is to prioritize **simplicity, speed, and accessibility** over complex features.

## Core Features

-   **Home Page (`/`)**: A simple form to submit a question.
-   **Response Page (`/response`)**: Displays the user's question and the AI's answer.
-   **Pure HTML**: Works without JavaScript.
-   **Stateless**: No cookies, sessions, or user tracking. Each query is independent.
-   **Backend Processing**: All logic is handled on the server (Node.js).

## Getting Started

### 1. Prerequisites

-   [Node.js](https://nodejs.org/)
-   [Yarn](https://yarnpkg.com/)
-   A `.env` file with your AI provider's API key (e.g., `GEMINI_API_KEY=your_key_here`).

### 2. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/DouglasDans/kindle-ai-client.git
cd kindle-ai-client
yarn install
```

### 3. Running in Development Mode

To run the application with live-reloading:

```bash
yarn dev
```

The server will start on the configured port.

### 4. Running in Production Mode

First, build the TypeScript code:

```bash
yarn build
```

Then, start the application:

```bash
yarn start
```
