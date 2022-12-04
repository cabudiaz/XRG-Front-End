import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesCardsComponent } from './routes-cards.component';

describe('RoutesCardsComponent', () => {
  let component: RoutesCardsComponent;
  let fixture: ComponentFixture<RoutesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
