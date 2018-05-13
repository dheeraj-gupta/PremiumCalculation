
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PremiumCalcComponent } from './premiumcalculation/premiumcalculation.component';

import { DataService } from "./shared/DataService";
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';


const appRoutes: Routes = [
    { path: '', redirectTo: 'PremiumCalc', pathMatch: 'full' },
    { path: 'PremiumCalc', component: PremiumCalcComponent }
];

@NgModule({
  declarations: [
      AppComponent, 
      PremiumCalcComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
        appRoutes
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
      DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
