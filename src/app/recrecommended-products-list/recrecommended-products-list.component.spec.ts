import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrecommendedProductsListComponent } from './recrecommended-products-list.component';

describe('RecrecommendedProductsListComponent', () => {
  let component: RecrecommendedProductsListComponent;
  let fixture: ComponentFixture<RecrecommendedProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrecommendedProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecrecommendedProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
