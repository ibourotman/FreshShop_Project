import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any[]=[];

  constructor(private datasrv: DataServiceService) { 
    window.scrollTo(0, 0)

  }


}
