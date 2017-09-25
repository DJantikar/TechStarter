import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DonationComponent } from './donation/donation.component';
import { DonationslistService } from 'app/donationslist.service';
import { ShowComponent } from './show/show.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { SplashComponent } from './splash/splash.component';


const appRoutes : Routes = [
  {path: 'product', component: ProductpageComponent},
  {path: '', component: SplashComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    DonationComponent,
    ShowComponent,
    ProductpageComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DonationslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
