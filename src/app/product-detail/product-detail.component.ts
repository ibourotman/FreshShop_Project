import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
ngOnInit(): void {
  window.scrollTo(0, 0)
}
}
