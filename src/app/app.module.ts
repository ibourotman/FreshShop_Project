import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { HeroComponent } from './home/hero/hero.component';
import { FeatureComponent } from './home/feature/feature.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductShopComponent } from './product-detail/product-shop/product-shop.component';
import { ProductDecriptionComponent } from './product-detail/product-shop/product-decription/product-decription.component';
import { ProductReviewComponent } from './product-detail/product-shop/product-review/product-review.component';
import { FeaturedComponent } from './featured/featured.component';
import { RelatedProductComponent } from './product-detail/related-product/related-product.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    FeatureComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductShopComponent,
    ProductDecriptionComponent,
    ProductReviewComponent,
    FeaturedComponent,
    RelatedProductComponent,
    FooterComponent,
    CartComponent,
    ShopComponent,
    CheckoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
