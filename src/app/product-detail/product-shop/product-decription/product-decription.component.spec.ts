import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDecriptionComponent } from './product-decription.component';

describe('ProductDecriptionComponent', () => {
  let component: ProductDecriptionComponent;
  let fixture: ComponentFixture<ProductDecriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDecriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
