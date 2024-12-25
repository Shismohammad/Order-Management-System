const calculateDiscount = (quantity, price) => {
  let totalAmount = quantity * price
  let discount = 0

  if (totalAmount > 10000) {
    discount = totalAmount * 0.1
  }

  if (quantity > 5) {
    discount = discount + 500
  }

  finalAmount = totalAmount - discount

  let final = {
    totalAmount,
    discount,
    finalAmount,
  }

  return final
}

export { calculateDiscount }
