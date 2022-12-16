import express from "express";
import propertyRouter from "./routes/router.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors("*"));

app.use("/api/properties", propertyRouter);
const PORT = process.env.PORT;

export default app;

/**
 * This is where we tell the server to listen on the specified port for requests.
 */
app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
