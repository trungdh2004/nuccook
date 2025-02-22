import express from 'express';
import "dotenv/config";
import appConfig from './config/app.config';
import {  handleError } from './middleware/handleError';
import cookieParser from 'cookie-parser';
import { asyncHandle } from './middleware/asyncHandle';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res,next) => {
    res.send("Hello World");
});

app.get("/error",asyncHandle(async(req, res, next) => {
    throw new Error("Error");
}))

app.use(handleError)

app.listen(appConfig.PORT, () => {
    console.log("Server is running on port: http://localhost:" + appConfig.PORT);
});