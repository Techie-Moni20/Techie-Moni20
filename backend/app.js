import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import Razorpay from "razorpay";
import app  from '..//backend/';

// If app.js exports this way
const app = express();


module.exports = app;

// Then import should be:
export default app;

app.use(cors())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
})

//student routes
import studentRouter from "./src/routes/student.routes.js";
app.use("/api/student", studentRouter)


//teacher routes
import teacherRouter from "./src/routes/teacher.routes.js"
app.use("/api/teacher", teacherRouter)

//course routes
import courseRouter from "./src/routes/course.routes.js"
app.use("/api/course", courseRouter)

import adminRouter from "./src/routes/admin.routes.js"
app.use("/api/admin", adminRouter)

import paymentRouter from "./src/routes/payment.routes.js"
app.use("/api/payment", paymentRouter)


export {app}