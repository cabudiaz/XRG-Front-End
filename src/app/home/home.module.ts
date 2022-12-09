import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileModule } from '../profile/profile.module';
import { StoriesComponent } from './stories/stories.component';
import { FollowersListComponent } from './followers-list/followers-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    StoriesComponent,
    FollowersListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProfileModule,
    SwiperModule,
  ]
})
export class HomeModule { }
