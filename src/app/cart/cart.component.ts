import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';
import { Order } from '../shared/order.model';
import { Product } from '../shared/product.model';
import { OrderItem } from '../shared/order-item.model';
import { User } from '../shared/user.model';
import { CartServiceService } from '../shared/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  orderitem:any[] = []
  Product:Product[] = []
  order!:Order;
  totalCart:number = 0;
  constructor(private datasrv:DataServiceService){
    this.GetOrders();

  }
  ngOnInit(): void {
    this.GetOrders();
    window.scrollTo(0, 0)

  }

  GetOrders() {
    this.datasrv.getOrdersForUser(4).subscribe(
      (data) => {
        this.order = data;
        console.log(this.order)
        this.getTotal();
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  replace(str:string):string{
    return str.replace("http://","");

  }

  onDeleteProduct(orderId: number, itemId: number): void {
    this.datasrv.deleteOrderItem(orderId, itemId).subscribe(
      () => {
        console.log('Order item deleted successfully');
        this.GetOrders();
      },
      (error) => {
        console.error('Error deleting order item:', error);
      }
    );
  }
  OnIncrement(orderId: number, itemId: number, currentQuantity: number): void {
    const newQuantity = currentQuantity + 1;
    this.datasrv.updateOrderItemQuantity(orderId, itemId, newQuantity).subscribe(
        () => {
            console.log('Order item quantity updated successfully');
            this.GetOrders()
        },
        error => {
            console.error('Error updating order item quantity:', error);
        }
    );
}

  OnDecrement(orderId: number, itemId: number, currentQuantity: number): void {
    const newQuantity = currentQuantity - 1;
    this.datasrv.updateOrderItemQuantity(orderId, itemId, newQuantity).subscribe(
        () => {
            console.log('Order item quantity updated successfully');
            this.GetOrders()
        },
        error => {
            console.error('Error updating order item quantity:', error);
        }
    );
}
getTotal(){
  for(let i of this.order.items){
    this.totalCart = this.totalCart + i.product.price * i.quantity;
  }
  console.log(this.totalCart)
  return this.totalCart;
}

}
