import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedProductDetailComponent } from './recommended-product-detail.component';

describe('RecommendedProductDetailComponent', () => {
  let component: RecommendedProductDetailComponent;
  let fixture: ComponentFixture<RecommendedProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
