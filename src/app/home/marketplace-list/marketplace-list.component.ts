import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/_services/ads.service';

@Component({
  selector: 'app-marketplace-list',
  templateUrl: './marketplace-list.component.html',
  styleUrls: ['./marketplace-list.component.scss']
})
export class MarketplaceListComponent implements OnInit {
  ads:any
  constructor(private adsService: AdsService) { }

  ngOnInit(): void {
    this.adsService.getAdsCards().subscribe(
      {
        next: (data:any)=>{
          console.log(data);
          this.ads= data.res
                   
          
        },
        error:(error)=>{
          console.log(error);
          
        }
        
      });
      
  }

}
