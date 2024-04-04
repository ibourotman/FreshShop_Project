import { Component, ElementRef, ViewChild, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { CartServiceService } from '../../shared/cart-service.service';
import { DataServiceService } from '../../shared/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  isModalOpen: boolean = false;
  @Input() TotalOrder:number = 0;
  constructor(private datasrv: DataServiceService) {
   
   }
  //  ngOnInit(): void {
  //   this.datasrv.getOrdersForUser(4).subscribe(
  //     (data) => {
  //       this.TotalOrder = data.items.length;
  //       console.log(this.TotalOrder)

  //     },
  //     (error) => {
  //       console.error('Error fetching products:', error);
  //     }
  //   );
  //  }





  toggleModal() {
    console.log('clicked')
    this.isModalOpen = !this.isModalOpen;
  }
}
