import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './shared/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'PROJECT';
  TotalOrde:number = 0;
  constructor(private datasrv: DataServiceService) {
   
   }
   ngOnInit(): void {
    this.datasrv.getOrdersForUser(4).subscribe(
      (data) => {
        this.TotalOrde = data.items.length;
        console.log(this.TotalOrde)

      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
   }

}
