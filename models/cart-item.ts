class CartItem {
  quantity: number
  productPrice: number
  productName: string
  sum: number
  constructor(quantity: number, productPrice: number, productName: string, sum: number) {
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productName = productName;
    this.sum = sum;
  }
}

export default CartItem;
