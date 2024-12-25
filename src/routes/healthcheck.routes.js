import { Router } from "express"
import { healthcheck } from "../controllers/healthcheck.controller.js"

const router = Router()

//---------------- Unsecure routes --------------------- //
router.route("/").get(healthcheck)

export default router
