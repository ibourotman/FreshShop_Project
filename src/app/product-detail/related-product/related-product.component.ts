import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrl: './related-product.component.css'
})
export class RelatedProductComponent {
     vegetables = [
        {
          name: 'Parsley',
          imageSrc: '../../../assets/images/vegetable-item-6.jpg',
          category: 'Vegetable',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
          price: '$4.99 / kg'
        },
        {
            name: 'Brocoli',
            imageSrc: '../../../assets/images/vegetable-item-2.jpg',
            category: 'Fruit',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
            price: '$1.99 / kg'
        },
        {
            name: 'tomato',
            imageSrc: '../../../assets/images/vegetable-item-1.jpg',
            category: 'Vegetable',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
            price: '$4.99 / kg'
        },
        {
            name: 'Bell pappe',
            imageSrc: '../../../assets/images/vegetable-item-4.jpg',
            category: 'Vegetable',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
            price: '$4.99 / kg'
        },
        {
            name: 'Potato',
            imageSrc: '../../../assets/images/vegetable-item-5.jpg',
            category: 'Vegetable',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
            price: '$4.99 / kg'
        },
      ];
  customOptions: OwlOptions = {
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
  }

}
