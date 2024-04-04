import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private apiUrl = 'http://localhost:8000/api/products/';
  private apiUrlo = 'http://localhost:8000/api/orders/';
  private totalOrderSubject = new BehaviorSubject<number>(0);
  totalOrder$ = this.totalOrderSubject.asObservable();

  constructor(private http: HttpClient) {
    
   }
   updateTotalOrder(newTotal: number) {
    this.totalOrderSubject.next(newTotal);
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getOrdersForUser(userId: number): Observable<Order> {
    const url = `${this.apiUrlo}${userId}`;
    return this.http.get<Order>(url);
  }
  deleteOrderItem(orderId: number, itemId: number): Observable<any> {
    const url = `${this.apiUrlo}${orderId}/items/${itemId}/`;
    return this.http.delete(url);
  }
  updateOrderItemQuantity(orderId: number, itemId: number, quantity: number): Observable<any> {
    const url = `${this.apiUrlo}${orderId}/items/${itemId}/update/`;
    return this.http.patch(url, { quantity });
}
addProductToOrder(orderId: number, productId: number, quantity: number): Observable<OrderItem> {
  const url = `${this.apiUrlo}${orderId}/items/${productId}/add/`;
  return this.http.post<OrderItem>(url, { quantity });
}
getProductById(productId: number): Observable<Product> {
  const url = `${this.apiUrl}${productId}/`;
  return this.http.get<Product>(url);
}



}
