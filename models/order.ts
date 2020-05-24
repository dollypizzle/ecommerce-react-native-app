import moment from 'moment';

class Order {
  id: number | string
  items: string
  totalAmount: number
  date: any
  constructor(id: string | number, items: string, totalAmount: number, date: Date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }
}

export default Order;
