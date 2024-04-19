import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './shared/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'PROJECT';
  constructor(private datasrv: DataServiceService) {
    
   }
   ngOnInit(): void {
    this.datasrv.getOrdersForUser(1).subscribe(
      (data) => {
        const totalOrder = data.items.length
        this.datasrv.updateTotalOrder(totalOrder);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
   }

}
