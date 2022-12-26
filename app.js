// Import express, morgan, cors
import express from "express";
import morgan from "morgan";
import cors from "cors";

// Import the routes
import propertyRouter from './routes/properties.js'
import imagesRouter from "./routes/images.js";

// Initialize our express app
const app = express();

app.use(cors("*"));
app.use(morgan("dev"));
app.use(express.json());

// Invoke the routers
app.use("/api/properties", propertyRouter);
app.use("/api/images", imagesRouter);

//Tell the server to listen on the specified port for requests.
const PORT = process.env.PORT;
app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

export default app;

