import { Component, OnInit, ViewEncapsulation,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import SwiperCore, { Pagination } from "swiper";
import { ChallengeService } from 'src/app/_services/challenge.service';

SwiperCore.use([Pagination]);
// export interface DialogData {
//   mageChallengeDescription: string;
//   logoImgChallenge: string;
//   descriptionLong: string;
// }

@Component({
  selector: 'app-training-discount',
  templateUrl:'./training-discount.component.html',
  styleUrls: ['./training-discount.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TrainingDiscountComponent implements OnInit {
  challenges:any;
  // imageChallengeDescription: string;
  // logoImgChallenge: string;
  // descriptionLong: string,
  constructor(public dialog: MatDialog, private challengeService: ChallengeService) { }

  openDialog(imageChallengeDescription:string,logoImgChallenge:string, descriptionLong:string) {
  /* console.log(imageChallengeDescription); */
    const dialogRef = this.dialog.open(DescriptionTrainingDiscount,{
    data: {imageChallengeDescription,logoImgChallenge, descriptionLong},
  });
  
    dialogRef.afterClosed().subscribe(result => {
      /* console.log('Dialog result'); */
// this.openDialog= result
    });
  }



  ngOnInit(): void {
    this.challengeService.getChallengeCards().subscribe(
      {
        next: (data:any)=>{
          /* console.log(data); */
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
export class DescriptionTrainingDiscount {
  constructor(
    public dialogRef: MatDialogRef<DescriptionTrainingDiscount>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
