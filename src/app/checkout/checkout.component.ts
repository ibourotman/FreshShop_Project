import { Component } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';
import { Order } from '../shared/order.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  order!:Order;
  totalCart:number = 0;
  constructor(private datasrv:DataServiceService,private route:ActivatedRoute){
    this.GetOrders();
    window.scrollTo(0, 0)

  }
  GetOrders() {
    const orderId = this.route.snapshot.paramMap.get('orderId');
  
    this.datasrv.getOrdersForUser(Number(orderId)).subscribe(
      (data) => {
        this.order = data;
        this.getTotal();
        console.log(this.order);
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
  replace(str:string):string{
    return str.replace("http://","");

  }
  getTotal(){
    for(let i of this.order.items){
      this.totalCart = this.totalCart + i.product.price * i.quantity;
    }
    console.log(this.totalCart)
    this.totalCart = parseFloat(this.totalCart.toFixed(2))
  }
}
