import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { DataServiceService } from '../shared/data-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  tags:string[] = ['All Products','Vegetables','Fruits','Bread','Meat'];
  constructor(private datasrv:DataServiceService){

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
