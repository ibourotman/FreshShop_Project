import { Component } from '@angular/core';
import { CartServiceService } from '../../shared/cart-service.service';
import { DataServiceService } from '../../shared/data-service.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrl: './product-shop.component.css'
})
export class ProductShopComponent {
  ShowDescription:boolean = true
  ShowReview:boolean = false;
  productId!: number;
  Pro:Product = new Product(0,'','',0,'','','','','');
  quantity: number = 1;
  reviews = [{name:"Jason Smith", data:"April 12, 2024",message:"The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit"},
  {name:"Sam Peters",data:"April 12, 2024",message:"The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit"}]
  
  
  constructor( private route: ActivatedRoute,private dataService:DataServiceService,private cartSrv:CartServiceService){

}
ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.productId = +params['id']; // Extracting the ID from the route parameters
    this.dataService.getProductById(this.productId).subscribe(
      (product) => {
        this.Pro = product;
        console.log(product); // Log the product data here
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  });
}
addToCart(product: Product, quantity: number) {
  this.dataService.addProductToOrder(4, product.id, quantity).subscribe(
    (orderItem) => {     
      // On successful addition, add the item to the cart service
      this.cartSrv.addItem(orderItem);
      this.dataService.getOrdersForUser(1).subscribe(
        (data) => {
          const totalOrder = data.items.length
          this.dataService.updateTotalOrder(totalOrder);
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      ); 
      console.log("Product added to cart:", orderItem);
    },
    (error) => {
      console.error("Error adding product to cart:", error);
    }
  );
}
OnDescription(){
  this.ShowDescription = !this.ShowDescription;
  this.ShowReview = !this.ShowReview;


}
OnReview(){
  this.ShowDescription = !this.ShowDescription;
  this.ShowReview = !this.ShowReview;

}
replace(str:string):string{
  return str.replace("http://","");
}
IncrementQuantity(){
  this.quantity++;
}
DecrementQuantity(){
  this.quantity--;
}

}
