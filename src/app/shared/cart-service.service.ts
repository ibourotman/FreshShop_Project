import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  TotalOrderPro!:number;

  items:any = []
  addItem(Product:any){
    this.items.push(Product);
  }
  removeItem(Product:any){
    this.items.splice(Product.id,1);
  }
  getItemCount(): number {
    return this.items.length;
  }


}
