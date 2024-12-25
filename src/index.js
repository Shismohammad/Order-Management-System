// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv"
import { app } from "./app.js"
dotenv.config({ path: "./env" })

app.listen(process.env.PORT || 8001, () => {
  console.log(`Server started at port : ${process.env.PORT || 8001}`)
})
