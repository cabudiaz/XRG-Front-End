import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-training-discount',
  templateUrl:'./training-discount.component.html',
  styleUrls: ['./training-discount.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TrainingDiscountComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DescriptionTrainingDiscount);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'description-training-discount',
  templateUrl: './description-training-discount.html',
})
export class DescriptionTrainingDiscount {}
