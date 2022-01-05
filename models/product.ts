class Product {
  id: number
  userId: number
  name: string
  image: string
  brand: string
  description: string
  price: number
  constructor(id: number, userId: number, name: string, image: string, brand: string, description: string, price: number) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.image = image;
    this.brand = brand;
    this.description = description;
    this.price = price;
  }
}

export default Product;
