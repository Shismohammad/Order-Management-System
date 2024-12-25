import { Router } from "express"
import {
  placeOrder,
  getOrderDetails,
  calculateRevenue,
} from "../controllers/order.controller.js"

const router = Router()

//---------------- Unsecure routes --------------------- //
router.route("/order").post(placeOrder)
router.route("/order/:orderId").get(getOrderDetails)
router.route("/revenue").get(calculateRevenue)

//---------------- Secure routes --------------------- //

export default router
