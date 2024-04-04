import { Order } from "./order.model";
import { Product } from "./product.model";

export class OrderItem {
    id:number;
    product: Product;
    quantity: number;
    constructor(id:number,order:Order,product:Product,quantity:number){
        this.product = product;
        this.quantity = quantity;
        this.id = id;

    }
  }