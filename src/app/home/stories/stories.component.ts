import { Component, OnInit,ViewEncapsulation,Inject } from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination } from "swiper";
import { StoryService } from 'src/app/_services/story.service';

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class StoriesComponent implements OnInit {
  stories:any
  constructor(public dialog: MatDialog, private storyService: StoryService) { }

  openStory(descriptionStory:string, imageStory:string,photoProfile:string,profileName:string ) {
    const dialogRef = this.dialog.open(storyDialog,{
    data: {descriptionStory,imageStory, photoProfile,profileName},
 });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result`);
    });
  }

  ngOnInit(): void {

    this.storyService.getStories().subscribe(
      {
        next: (data:any)=>{
          console.log(data);
          this.stories= data.res
                   
          
        },
        error:(error)=>{
          console.log(error);
          
        }
        
      });
      console.log(this.stories);

  }

}
@Component({
  selector: 'story-dialog',
  templateUrl: './story-dialog.html',
})
export class storyDialog {
  constructor(
  public dialogRef: MatDialogRef<storyDialog>,
  @Inject(MAT_DIALOG_DATA) public data:any,
) {}

ngOnInit(): void {
  console.log(this.data);
  }
onNoClick(): void {
  this.dialogRef.close();
}}
