# Express Ping Server

A minimal Node.js Express server with a health-check endpoint.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (included with Node.js)

## How to run

1. **Open a terminal** in this project folder (`I2-Day1`).

2. **Install dependencies** (first time only):

   ```bash
   npm install
   ```

3. **Start the server**:

   ```bash
   npm start
   ```

   You should see: `Server listening on http://localhost:3000`

4. **Test the endpoint** — in another terminal or browser:

   ```bash
   curl http://localhost:3000/ping
   ```

   Or open [http://localhost:3000/ping](http://localhost:3000/ping) in your browser.

   Expected response:

   ```json
   { "status": "UID Tech running" }
   ```

## Optional

- Use a different port: `set PORT=4000 && npm start` (Windows) or `PORT=4000 npm start` (macOS/Linux).
