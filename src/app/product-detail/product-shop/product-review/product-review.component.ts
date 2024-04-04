import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.css'
})
export class ProductReviewComponent {
@Input() data:any;
}
