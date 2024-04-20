import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';
import { Order } from '../shared/order.model';
import { Product } from '../shared/product.model';
import { Router } from '@angular/router';

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
  userid!:number;
  constructor(private datasrv:DataServiceService,private router: Router){
    this.GetOrders();

    

  }
  ngOnInit(): void {
    this.GetOrders();
    window.scrollTo(0, 0)

  }

  GetOrders() {
    this.datasrv.getOrdersForUser(1).subscribe(
      (data) => {
        this.order = data;
        this.userid = Number(this.order.user);
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
        this.datasrv.getOrdersForUser(1).subscribe(
          (data) => {
            const totalOrder = data.items.length
            this.datasrv.updateTotalOrder(totalOrder);
          },
          (error) => {
            console.error('Error fetching products:', error);
          }
        ); 
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
  this.totalCart = parseFloat(this.totalCart.toFixed(2))
}

goToCheckout(orderId :number) {
  console.log("user :",this.order.user)
  this.router.navigate(['/checkout', orderId]); // Navigate to the checkout page with order ID
}
}
