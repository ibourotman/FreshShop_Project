import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  
  {path:'product/:id', component:ProductDetailComponent,
  },
  {path:'cart', component:CartComponent},
  {path:'Shop', component:ShopComponent},
  { path: 'checkout/:orderId', component: CheckoutComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
