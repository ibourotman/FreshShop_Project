import { OrderItem } from "./order-item.model";
import { User } from "./user.model";

export class Order {
    id: number;
    user: User;
    items: OrderItem[];
    constructor(id:number,user:User,items:OrderItem[]){
        this.id = id;
        this.user = user;
        this.items = items;
    }
  }