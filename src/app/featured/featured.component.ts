import { Component } from '@angular/core';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {
 products = [
    {
      name: 'Apple',
      imageSrc: '../../../assets/images/featur-1.jpg',
      rating: 5,
      price: '1.99 $',
      originalPrice: '4.11 $'
    },
    {
      name: 'Brocoli',
      imageSrc: '../../../assets/images/featur-2.jpg',
      rating: 4,
      price: '2.99 $',
      originalPrice: '4.11 $'
    },
    {
      name: 'Strawberry',
      imageSrc: '../../../assets/images/featur-3.jpg',
      rating: 3,
      price: '4.99 $',
      originalPrice: '4.11 $'
    },
  
  ];

  getStarsArray(rating: number): { empty: boolean }[] {
    const stararray = []
    for(let i = 0 ; i <= 5;i++){
      stararray.push({empty:i<=rating})
    }
    return stararray;
  }
}
