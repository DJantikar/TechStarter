import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductpageComponent } from './productpage/productpage.component';

const appRoutes: Routes = [
  { path: 'login', component: ProductpageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
