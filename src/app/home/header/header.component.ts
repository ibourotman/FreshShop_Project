import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../shared/data-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isModalOpen: boolean = false;
  totalOrder$!: Observable<number>;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.totalOrder$ = this.dataService.getTotalOrder();
  }

  toggleModal() {
    console.log('clicked');
    this.isModalOpen = !this.isModalOpen;
  }
}
