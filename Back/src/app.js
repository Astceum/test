import express from 'express'
import fileUpload from "express-fileupload";
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import cors from "cors";

import authRoutes  from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import companyRoutes from "./routes/company.routes.js";
import sliderHomeRoutes from "./routes/sliderhome.routes.js"


const app = express()

app.use(cors({
    /* origin: 'http://localhost:5173', */
    origin: 'https://magyprint.cl',
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))
app.use(cookieParser())

app.use("/api", authRoutes)
app.use("/api", postRoutes)
app.use("/api", companyRoutes)
app.use("/api", sliderHomeRoutes)

export default app