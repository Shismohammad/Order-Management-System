import { orders } from "../models/order.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { v4 as uuidv4 } from "uuid"
import { calculateDiscount } from "../utils/discount.js"

const placeOrder = asyncHandler(async (req, res) => {
  if (!req.body || !req.body.orderDetails) {
    throw new ApiError(400, "Order data not found")
  }

  const { productName, quantity, unitPrice } = req.body.orderDetails

  if (!productName) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Product name must have vaild name!"))
  }

  if (quantity <= 0) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Please add Quantity"))
  }

  if (unitPrice <= 0) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Price must be vaild number"))
  }

  const { totalAmount, discount, finalAmount } = calculateDiscount(
    quantity,
    unitPrice
  )

  const orderSummary = {
    orderId: uuidv4(),
    productName,
    quantity,
    unitPrice,
    totalAmount,
    discount,
    finalAmount,
    orderTimpstamp: new Date().toISOString(),
  }

  orders.push(orderSummary)

  return res
    .status(201)
    .json(new ApiResponse(201, orderSummary, "Order placed successfully"))
})

const getOrderDetails = asyncHandler(async (req, res) => {
  const { orderId } = req.params

  const order = orders.find((elem) => elem.orderId === orderId)

  if (!order) {
    return res
      .status(404)
      .json(new ApiResponse(404, order, "Order Details not found !"))
  }

  return res
    .status(200)
    .json(new ApiResponse(201, order, "Order Details found !"))
})

const calculateRevenue = asyncHandler(async (req, res) => {
  console.log(orders)

  const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0)

  const obj = {
    totalRevenue,
  }

  return res
    .status(200)
    .json(new ApiResponse(200, obj, "Revenue Details found"))
})

export { placeOrder, getOrderDetails, calculateRevenue }
