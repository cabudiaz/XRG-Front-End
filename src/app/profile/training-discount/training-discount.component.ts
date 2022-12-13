import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination } from "swiper";
import { ChallengeService } from 'src/app/_services/challenge.service';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-training-discount',
  templateUrl:'./training-discount.component.html',
  styleUrls: ['./training-discount.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TrainingDiscountComponent implements OnInit {
  challenges:any
  constructor(public dialog: MatDialog, private challengeService: ChallengeService) { }

  openDialog() {
    const dialogRef = this.dialog.open(DescriptionTrainingDiscount);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  ngOnInit(): void {
    this.challengeService.getChallengeCards().subscribe(
      {
        next: (data:any)=>{
          console.log(data);
          this.challenges= data.res

          
          
        },
        error:(error)=>{
          console.log(error);
          
        }
        
      });
  }

}
@Component({
  selector: 'description-training-discount',
  templateUrl: './description-training-discount.html',
})
export class DescriptionTrainingDiscount {}
