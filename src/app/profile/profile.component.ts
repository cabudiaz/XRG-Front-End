import { Component, OnInit, ViewChild } from '@angular/core';

import { TokenStorageService } from '../_services/token-storage.service';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile:any

  constructor(
    private tokenService: TokenStorageService,
    
  ) {}
  

  ngOnInit(): void {
  
   
  }

  
  
  }




