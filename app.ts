import express from "express";
import requestLogger from "./utils/requestLogger";
import errorHandler from "./utils/errorHandler"

const app = express();

app.use(express.json())
app.use(requestLogger)

app.get("/", (_, res) => {
  res.json({ msg: "Wer'e up, open app.ts to edit me!" });
});

// Routes  here <---

app.use(errorHandler)

// Unknown endpoint handler
app.use((_, res) => {
  res.status(400).json({ error: 'bad request' });
})



export default app;
