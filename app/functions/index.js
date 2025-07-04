const functions = require("firebase-functions");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  // Specify your Next.js directory here
  conf: {
    distDir: ".next",
  },
});

const handle = app.getRequestHandler();

// Prepare the Next.js app once, then reuse the handler
exports.nextApp = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
