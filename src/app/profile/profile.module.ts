import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PerformanceComponent } from './performance/performance.component';
import { TrainingDiscountComponent } from './training-discount/training-discount.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { RoutesCardsComponent } from './routes-cards/routes-cards.component';




@NgModule({
  declarations: [
    ProfileComponent,
    PerformanceComponent,
    TrainingDiscountComponent,
    ProfileCardComponent,
    RoutesCardsComponent,
    
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SwiperModule, 
  ],
  exports:[
    ProfileCardComponent
  ],
  providers: [
   
  ]
})
export class ProfileModule { }
