import { Component, OnInit } from '@angular/core';
import { DonationEntity } from 'app/shared/donationentity.model';
import { DonationslistService } from 'app/donationslist.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  donations : DonationEntity[] ; 

  
    constructor( private donationsListService : DonationslistService) { }
  
    ngOnInit() {
      this.donations = this.donationsListService.getDonations();
      this.donationsListService.donationsChanged.subscribe(
        (donationsChanged : DonationEntity[]) =>  { this.donations = donationsChanged;}
      );
    }
  
    
}
