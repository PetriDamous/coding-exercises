import express from "express";
import webpush from "web-push";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:8080",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.use(bodyParser.json());

// -----------------------------
// 1. Your VAPID Keys
// -----------------------------
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;

const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

// Configure web-push with your keys
webpush.setVapidDetails(
  "mailto:you@example.com",
  publicVapidKey,
  privateVapidKey,
);

// -----------------------------
// 2. Endpoint to receive subscription JSON
// -----------------------------
let savedSubscription = null;

app.get("/vapid-public-key", (req, res) => {
  res.json({ key: process.env.PUBLIC_VAPID_KEY });
});

app.post("/subscribe", (req, res) => {
  savedSubscription = req.body;

  console.log("savedSubscription", savedSubscription);
  console.log("req.body", req.body);

  console.log("Subscription received:");
  console.log(JSON.stringify(savedSubscription, null, 2));

  res.status(201).json({ message: "Subscription stored on server" });
});

// -----------------------------
// 3. Endpoint to send a push notification
// -----------------------------
app.post("/send-push", async (req, res) => {
  if (!savedSubscription) {
    return res.status(400).json({ error: "No subscription stored yet" });
  }

  const payload = JSON.stringify({
    title: "Push from your Node server!",
    body: "Hello Dimitri — your push server works!",
  });

  try {
    await webpush.sendNotification(savedSubscription, payload);
    res.json({ message: "Push sent successfully" });
  } catch (err) {
    console.error("Push error:", err);
    res.status(500).json({ error: "Failed to send push" });
  }
});

// -----------------------------
// 4. Start server
// -----------------------------
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Push server running on http://localhost:${PORT}`);
});
