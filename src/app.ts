import "reflect-metadata"
import "express-async-errors"
import express from "express"
import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware"
import userRoutes from "./routes/user.routes"

const app = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use(handleAppErrorMiddleware)


export default app