import express from "express"
import cors from "cors"

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)
app.use(express.urlencoded({ extended: true, limit: "1mb" }))
app.use(express.json({ limit: "1mb" }))

// routes import
import orderRouter from "./routes/order.routes.js"
import healthCheck from "./routes/healthcheck.routes.js"

// routes declaration
app.use("/api/v1/", orderRouter)
app.use("/api/v1/health", healthCheck)

export { app }
