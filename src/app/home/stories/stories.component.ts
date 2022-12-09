import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class StoriesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openStory() {
    const dialogRef = this.dialog.open(storyDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'story-dialog',
  templateUrl: './story-dialog.html',
})
export class storyDialog {}
