import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceListComponent } from './marketplace-list.component';

describe('MarketplaceListComponent', () => {
  let component: MarketplaceListComponent;
  let fixture: ComponentFixture<MarketplaceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplaceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketplaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
