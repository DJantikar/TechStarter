import { Injectable, EventEmitter } from '@angular/core';
import { DonationEntity } from 'app/shared/donationentity.model';

@Injectable()
export class DonationslistService {
  donationsChanged = new EventEmitter<DonationEntity[]>();
  private donations : DonationEntity[] = [
    new DonationEntity("Ken",1000) ,
    new DonationEntity("Padma",2000) ,
    new DonationEntity("Shannon",3000) ];

    addDonation(de : DonationEntity){
      this.donations.push(de);
      //this.donations=this.donations.slice();
      this.donationsChanged.emit(this.donations);

    }
    getDonations(){
      return this.donations;
    }
}
