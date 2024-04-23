import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  tags:string[] = ['All Products','Vegetables','Fruits','Bread','Meat'];
  constructor(private datasrv:DataServiceService){
    window.scrollTo(0, 0)

  }
  
  product:Product[] = []
  prodByatg:Product[] = []
ngOnInit(): void {
  
  this.datasrv.getProducts().subscribe(
    (data) => {
      this.product = data;
      this.prodByatg = this.product
      console.log(this.product)
    },
    (error) => {
      console.error('Error fetching products:', error);
    }
  );
}
getProductnbr(category: string) :number{
  if(category == "All Products"){
    return this.product.length;
  }
  else{
    return this.product.filter(product => product.category === category).length;
  }

}
  getAllProductByTag(category: string) {
    if (category === "All Products") {
      this.prodByatg = this.product;
    } else {
      this.prodByatg = this.product.filter(product => product.category === category);
    }
  }
  extractFilename(imgurl:string){
    return imgurl.replace("http://","")
  }
}
