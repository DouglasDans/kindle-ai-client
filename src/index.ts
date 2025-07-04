import express from "express";
import mainRouter from "./routes";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use("/", mainRouter);

app.listen(port, () => {
  console.info(`Server is listening on port: ${port}`);
});
