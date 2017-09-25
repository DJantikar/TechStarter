import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DonationslistService } from 'app/donationslist.service';
import { DonationEntity } from 'app/shared/donationentity.model';
import 'jquery';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {

  @ViewChild('inputAmount') inputAmountRef: ElementRef;
  @ViewChild( 'inputName') inputNameRef : ElementRef;

  constructor (private dlService : DonationslistService){}

  onAdd(){
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
   this.dlService.addDonation(new DonationEntity(ingName,ingAmount));
  }

}
