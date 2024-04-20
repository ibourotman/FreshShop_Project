import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home page
//   { 
//     path: '', 
//     canActivate: [AuthGuardService], // Protect routes with AuthGuard
//     children: [
//       { path: 'home', component: HomeComponent },
//       { path: 'product/:id', component: ProductDetailComponent },
//       { path: 'cart', component: CartComponent },
//       { path: 'shop', component: ShopComponent },
//       { path: 'checkout/:orderId', component: CheckoutComponent }
//     ]
//   },
//   // Add other routes as needed
// ];
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home page
  { path: 'home', component: HomeComponent },
  { path: 'Shop', component: ShopComponent },
  { 
    path: '', 
    canActivate: [AuthGuardService], // Protect routes with AuthGuard
    children: [
      { path: 'cart', component: CartComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'checkout/:orderId', component: CheckoutComponent }
    ]
  },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
