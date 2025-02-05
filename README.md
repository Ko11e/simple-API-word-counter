# Simple API for word counter

This is a simple API that calculates the frequency of words in a given text input. It returns the 10 most frequent words along with their count.

## Use the API

You can use the API by making a `POST`request with raw text data.

**Example**

``` javascript
    fetch("https://simple-api-word-counter.onrender.com/count", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: "Banan Äpple Katt Hund Banan Hund Katt Hund"
    })
    .then(response => response.json())
    .then(data => console.log("Response:", data))
    .catch(error => console.error("Error:", error));
```

## Getting Started

### Prerequisites

Ensure you have the following programs

- Node.js (version 12 or higher)
- Express.js

express.js can be installed by typing

``` terminal
npm install express --save
```

### Installation

To set up the project locally, follow the steps below:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd word-counter-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   node index.js
   ```
   The API should now be running on `http://localhost:3000`.

If the API is running correctly the text `Server is running on port 3000 http://localhost:3000` should be viewed in the terminal.

## Deploy and Cloning

### Clone the repository

A local clone of this repository can be made on GitHub. Please follow the below steps:

1. Log in to GitHub and locate the GitHub Repository
2. Above the repository file section, locate the 'Code' button.
3. Click on this button and choose your clone method from HTTPS, SSH, or GitHub CLI, copy the URL to your clipboard by clicking the 'Copy' button.
4. Open your Git Bash Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
7. Press Enter to create your local clone.

### Deploy API

This API is deployed on Render by following the steps below.

1. Go to Render.com and create an account.
2. Click New Web Service.
3. Connect your GitHub repository.
4. Choose Node.js as the runtime.
5. Set the Build Command to:

    ``` sh
    npm install
    ```

6. Set the Start Command to:

    ``` sh
    node index.js
    ```

7. Click Deploy.

## API Endpoint

### `POST /count`
- **Request:**
  - Content-Type: `text/plain`
  - Body: Raw text input
- **Response:**
  - A JSON object with the 10 most frequent words and their counts.

#### Example Request:
```sh
curl.exe -X POST "https://simple-api-word-counter.onrender.com/count" \
     -H "Content-Type: text/plain" \
     --data "Hello world hello world hello API"
```

#### Example Response:
```json
{
  "hello": 3,
  "world": 2,
  "api": 1
}
```

## Credit

### Media

**Youtube creators:**

- **_Fireship_** - RESTful APIs in 100 Seconds // Build an API from Scratch with Node.js Express
- **_Awesome_** - The Right Way To Build REST APIs

### Code

**Stockoverflow, MDN Web Docs**
Code and solutions to bugs that appear under the project were found using Stockoverflow and MDN Web Docs.
