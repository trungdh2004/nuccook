import express from 'express';
import "dotenv/config";
import appConfig from './config/app.config';
import {  handleError } from './middleware/handleError';
import cookieParser from 'cookie-parser';
import router from './routes/index.routes';
import cors from "cors"
import dbConnect from './config/db';
const app = express();
app.use(cors({
    origin: appConfig.CLIENT_URL,
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

dbConnect()
app.get("/",(req,res) => {
    res.send(appConfig.CLIENT_URL)
})

app.use("/api/v1",router)
app.use(handleError)

app.listen(appConfig.PORT, () => {
    console.log("Server is running on port: http://localhost:" + appConfig.PORT);
});