import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderComponent } from './home/header/header.component';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { 
    path: '', 
    component: AppComponent, 
    children: [
      { path: '', component: HomeComponent },
      { path: '', component: ProductComponent, outlet: 'secondary' }
    ] 
  },
  
  {path:'product/:id', component:ProductDetailComponent,
  },
  {path:'cart', component:CartComponent},
  {path:'Shop', component:ShopComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
