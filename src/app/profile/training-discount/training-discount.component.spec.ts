import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDiscountComponent } from './training-discount.component';

describe('TrainingDiscountComponent', () => {
  let component: TrainingDiscountComponent;
  let fixture: ComponentFixture<TrainingDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
