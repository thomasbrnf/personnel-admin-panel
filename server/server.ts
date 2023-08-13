import express from "express";
import dotenv from "dotenv";
import { router } from "./routers/routers";
import { initialiseTable } from "./dabatase";

dotenv.config();

initialiseTable();

const app = express();
const port = process.env.PORT;

app.use(router);

app.listen(port);
