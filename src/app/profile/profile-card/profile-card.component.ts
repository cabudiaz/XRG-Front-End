import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  user:any
  constructor(
    private tokenService: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.user=this.tokenService.getUser();
  }

}
