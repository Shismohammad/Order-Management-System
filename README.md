# Order Management System - Backend Development Task

## Overview

This is a backend application simulating an **Order Management System** with dynamic discount logic. The project showcases the use of RESTful APIs to perform basic order operations while integrating conditional business rules for applying discounts.

---

## Features

1. **Core Functionality**:

   - **Place an Order**: Accepts order details including product name, quantity, and price per unit. Generates a unique ID and timestamp for each order.
   - **Get Order Summary**: Fetches details of an order by its unique ID, including applied discounts.
   - **Calculate Total Revenue**: Computes the total revenue generated from all placed orders.

2. **Dynamic Discount Logic**:

   - **10% Discount**: Applied when the total order amount (`quantity × price`) exceeds ₹10,000.
   - **₹500 Flat Discount**: Applied when the order includes more than 5 items.
   - Discounts are reflected in stored data and order summary responses.

3. **Validation and Constraints**:

   - Input validation ensures no negative quantities or prices.
   - Data is stored in an in-memory array.

4. **Technology**:
   - Built with **Node.js** and **Express.js**.
   - Generates a **unique ID** for each order using the **uuid** library
   - Uses **JavaScript** for implementation.
   - Tested using **Postman** and **cURL**.

---

## Sample Scenarios

### Example 1: Order Below ₹10,000

- **Input**: `quantity = 3, pricePerUnit = 2000`
- **Output**:
  - Total: ₹6000
  - Discounts: ₹0
  - Final: ₹6000

---

### Example 2: Order Above ₹10,000

- **Input**: `quantity = 6, pricePerUnit = 2000`
- **Output**:
  - Total: ₹12,000
  - Discounts: ₹1700 (₹1200 + ₹500)
  - Final: ₹10,300

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone <repository-link>
   cd <repository-directory>
   ```

2. Install Dependencies:

   ```bash
     npm install
   ```

3. Start the Server:

   ```bash
     npm run dev
   ```

   production :

   ```bash
     npm start
   ```

# API Documentation

### 1. Place an Order

- **Method**: `POST`
- **URL**: `/api/v1/order`
- **Payload**:
  ```json
  {
    "orderDetails": {
      "productName": "Redmi Watch 5 Active",
      "quantity": 6,
      "unitPrice": 2000
    }
  }
  ```
- Response:
  ```json
  {
    "statusCode": 201,
    "data": {
      "orderId": "b6386544-9b6d-44ca-bddc-49aa6561a03e",
      "productName": "Redmi Watch 5 Active",
      "quantity": 6,
      "unitPrice": 2000,
      "totalAmount": 12000,
      "discount": 1700,
      "finalAmount": 10300,
      "orderTimpstamp": "2024-12-25T09:14:58.960Z"
    },
    "message": "Order placed successfully",
    "success": true
  }
  ```

### 2. Get Order Summary

- **Method**: `GET`
- **URL**: `/api/v1/order/:orderId`

- Response:

  ```json
  {
    "statusCode": 201,
    "data": {
      "orderId": "ea661624-6ba9-46b6-befb-bfda3bb27b6e",
      "productName": "Redmi Watch 5 Active",
      "quantity": 6,
      "unitPrice": 2000,
      "totalAmount": 12000,
      "discount": 1700,
      "finalAmount": 10300,
      "orderTimpstamp": "2024-12-25T10:42:59.415Z"
    },
    "message": "Order Details found !",
    "success": true
  }
  ```

### 3. Calculate Total Revenue

- **Method**: `GET`
- **URL**: `/api/v1/revenue`

- Response:
  ```json
  {
    "statusCode": 200,
    "data": {
      "totalRevenue": 24000
    },
    "message": "Revenue Details found",
    "success": true
  }
  ```

## Testing

- Use Postman or cURL to test the APIs.
